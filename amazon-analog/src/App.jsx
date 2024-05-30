import Home from "./pages/Home"
import NavBar from "./sections/NavBar"
import Footer from "./sections/Footer"
import { Route,Routes } from 'react-router-dom';
import AllProductsPage from "./pages/AllProductsPage";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <>
     <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProductsPage/>}/>
          <Route path="/products/name/:search" element={<AllProductsPage type={'search'}/>}/>
          <Route path="/products/bestsellers" element={<AllProductsPage type={'bestsellers'}/>}/>
          <Route path="/products/category/:category" element={<AllProductsPage type={'category'}/>}/>
          <Route path="/products/search/:id" element={<ProductPage/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
   
  )
}

export default App