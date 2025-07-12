import AllProducts from '../../pages/AllProducts/AllProducts'
import Product from '../../pages/Product/Product'
import Cart from '../../pages/Cart/Cart'
import Categories from '../../pages/Categories/Categories'
import CategoryProducts from '../../pages/CategoryProducts/CategoryProducts'
import DiscountedProducts from '../../pages/DiscountedProducts/DiscountedProducts'
import Homepage from '../../pages/HomePage/Homepage'
import NotFound from '../../pages/NotFound/NotFound'
import '../../styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route
            path="/categories/:categoryId"
            element={<Layout><CategoryProducts /></Layout>}
          />
          <Route path="/products" element={<Layout><AllProducts /></Layout>} />
          <Route path="/products/:productId" element={<Layout><Product /></Layout>} />
          <Route path="/discount" element={<Layout><DiscountedProducts /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
        <ScrollToTop/>
     
    </div>
  )
}

export default App
