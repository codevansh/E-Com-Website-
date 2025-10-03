import './footer.css'
import logo from '../assets/logo.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import instagram_icon from '../assets/instagram_icon.png'

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                    {/* Instagram_Icon */}
                </div>
                <div className="footer-icon-container">
                    <img src={pinterest_icon} alt="" />
                    {/* Pinterest_Icon */}
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                    {/* Whatsapp Icon */}
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default footer