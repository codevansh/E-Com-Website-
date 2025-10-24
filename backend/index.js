const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("Your MongoDB Connection String Here")

app.get("/", (req, res) => {
    res.send("Express App is Running")
})


//image storage engine   
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

//creating endpoint for uploading images
app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})

//Schema for creating Products( how the product should be/what all things should be there in product )
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})

//Creating api for adding products
app.post('/add-product', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            id = products[products.length - 1].id + 1;
        } else {
            id = 1;
        }
        const product = new Product({
            id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        res.json({
            message: "Product Added Successfully",
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error in /add-product:", error);
        res.status(500).json({ message: "Failed to add product", success: false });
    }
});

//creating api for removing products
app.post('/remove-product', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
        message: "Product Deleted Successfully",
        success: true,
        name: req.body.name
    })
})

//Creating api for getting all products
app.get('/all-products', async (req, res) => {
    let products = await Product.find({})
    console.log("All Products fetched");
    res.send(products);
})

//User Schema( what all things the users should put for registering into the website )
const Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Creating api for registering users
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email })
    if (check) {
        return res.status(400).json({
            success: false,
            message: "User with this email already exists",
        })
    }
    let cart = {}
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secretkey')
    res.json({
        success: true,
        token: token,
        message: "User Registered Successfully"
    })
})

//Creating api for logging in users
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User with this email does not exists",
        })
    } else {
        if (user.password != req.body.password) {
            return res.status(400).json({
                success: false,
                msg: "Incorrect Password",
            })
        }
    }

    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secretkey');
            res.json({
                success: true,
                token: token,
                msg: "User Logged In Successfully"
            })
        }
    }
})

//creating api for new_collection data.
app.get('/new-collections', async (req, res) => {
    let products = await Product.find({});
    let new_collection = products.slice(-8);
    console.log("New Collections fetched");
    res.send(new_collection);
})

//Creating endpoint for Popular in Women Section
app.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({ category: "Women" })
    let popular_in_women = products.slice(-8);
    console.log("Popular in Women");
    res.send(popular_in_women);
})

//Creating a Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "Please Authenticate using Valid Token" })
    } else {
        try {
            const data = jwt.verify(token, 'secret-ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Error" })
        }
    }
}

//Creating api for adding cartitems in DB
app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Product Added", req.body.itemId)
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
    res.send("Product Added");
})

//Creating api for removing cartitems in DB
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("Product Removed", req.body.itemId)
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
    res.send("Product Removed");
})

//Creating api for getting cartdata
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
})

app.listen(port, (e) => {
    if (!e) {
        console.log("Server running on Port " + port)
    } else {
        console.log("Error" + e)
    }
});
