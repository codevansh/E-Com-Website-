import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/addProduct/AddProduct'
import ListProduct from '../../components/listProduct/ListProduct'

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <div className="admin-main-content">
                <Routes>
                    <Route path='/add-product' element={<div><AddProduct /></div>} />
                    <Route path='/list-product' element={<div><ListProduct /></div>} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin