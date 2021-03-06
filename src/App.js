import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

const App = () =>{
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({line_items: []});

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());
  }
  const handleAddToCart = async(productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);

  }
  useEffect(()=>{
      fetchProducts();
      fetchCart();
  }, []);
  console.log(cart);
  return(
    <BrowserRouter>
      <div>
      <Navbar totalItems={cart.total_items}/>
      <Routes>
        <Route path="/" element={<Products products={products} onAddTocart={handleAddToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart}/>}/>
      </Routes>
      </div>
    </BrowserRouter>




  )
}
export default App;
