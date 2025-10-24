import { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import cart_cross_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_products, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

    return (
        <div className="cartItem">
            <div className="CartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="CartItem-format CartItem-format-main">
                            <img className='carticon-product-icon' src={e.image} alt="" />

                            <p>{e.name}</p>
                            <p>${e.new_price}</p>

                            <button className='cartItems-quantity'>{cartItem[e.id]}</button>

                            <p>${e.new_price * cartItem[e.id]}</p>

                            <img className='cartItems-remove-icon' src={cart_cross_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cartItems-totalItem">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-totalItem">
                            <p>Shipping Fees</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-totalItem">
                            <h3>Total:</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartItems-promoCode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartItems-promoBox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem