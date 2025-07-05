import AllProducts from '../../pages/AllProducts/AllProducts'
import Product from '../../pages/Product/Product'
import Cart from '../../pages/Cart/Cart'
import Categories from '../../pages/Categories/Categories'
import CategoryProducts from '../../pages/CategoryProducts/CategoryProducts'
import DiscountedProducts from '../../pages/DiscountedProducts/DiscountedProducts'
import Homepage from '../../pages/HomePage/Homepage'
import NotFound from '../../pages/NotFound/NotFound'
import '../../styles/App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
  
      <main>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path=".categories/:categoryId" element={<CategoryProducts/>}/>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/discount" element={<DiscountedProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
