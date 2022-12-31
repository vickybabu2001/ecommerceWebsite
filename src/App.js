import React from 'react';
import './App.css';
 
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'

import ProductsContextProvider from "./Global/ProductsContext";
import CartContextProvider from "./Global/CartContext"
import Products from './components/Products';
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"


function App() {
  return (
    <div>
      
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>
      
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Products />}/>
      
      <Route path="/cart" exact element={<Cart />}/>
       
      <Route  element={<NotFound />}/>
      </Routes>
     
      </Router> 
      </CartContextProvider>
       
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
