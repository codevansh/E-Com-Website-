import { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo_big from '../assets/logo_big.png'
import cart_icon from '../assets/cart_icon.png'
import nav_dropdown from '../assets/nav_dropdown.png'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropDown_toogle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo_big} alt="E-Com Website" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropDown' onClick={dropDown_toogle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {
                    setMenu("shop")
                }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>

                <li onClick={() => {
                    setMenu("mens")
                }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>

                <li onClick={() => {
                    setMenu("womens")
                }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>

                <li onClick={() => {
                    setMenu("kids")
                }}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem("auth-token") ?
                    <button onClick={() => {
                        localStorage.removeItem("auth-token");
                        window.location.replace("/");
                    }}> Logout </button> : <Link to='/login'><button>Login</button></Link>}

                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar