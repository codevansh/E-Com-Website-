import './productDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = ({ id, name, image, new_price, old_price }) => {
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                </div>
                <div className="productDisplay-image">
                    <img className='productDisplay-mainImage' src={image} alt={name} />
                </div>
            </div>

            <div className="productDisplay-right">
                <h1>{name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>122</p>
                </div>
                <div className='productDisplay-right-price'>
                    <div className="old_price">
                        ${old_price}
                    </div>
                    <div className="new_price">
                        ${new_price}
                    </div>
                </div>
                <div className="productDisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sapiente.
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='productDisplay-right button' onClick={() => addToCart(id)}>Add to Cart</button>
                <p className="productDisplay-right-category">
                    <span>Category :</span> Women, T-shirt, Crop top
                </p>
                <p className="productDisplay-right-category">
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
    );
}

export default ProductDisplay;
