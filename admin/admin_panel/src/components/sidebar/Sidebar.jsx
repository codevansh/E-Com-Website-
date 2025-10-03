import './Sidebar.css'
import { Link } from 'react-router-dom'
import sidebarAdd from '../../assets/Product_Cart.svg'
import sidebarList from '../../assets/Product_List_icon.svg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={'/add-product'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={sidebarAdd} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>

            <Link to={'/list-product'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={sidebarList} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar