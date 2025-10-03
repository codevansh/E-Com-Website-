import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/footer/footer';
// for men
import banner_men from './components/assets/banner_men.png'
// for women
import banner_women from './components/assets/banner_women.png'
// for kid
import banner_kids from './components/assets/banner_kids.png'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={banner_men} category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />}></Route>

          <Route path='/product/:productid' element={<Product />} />

          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/login' element={<LoginSignup />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  )
}

export default App
