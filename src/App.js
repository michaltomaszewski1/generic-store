import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StorePage from "./components/StorePage";
import ProductPage from "./components/ProductPage";
import React, {useState} from "react";
import CartPage from "./components/CartPage";
import "./css/main.css"

function App() {
    const [cart, setCart] = useState({});
    return (
          <BrowserRouter>
              <Navbar cart={cart}/>
              <div className="content">
                  <Routes>
                      <Route path='/' element={<HomePage/>}/>
                      <Route path='/store' element={<StorePage/>}/>
                      <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/> }/>
                      <Route path='/product/:id' element={<ProductPage cart={cart} setCart={setCart}/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
    );
}

export default App;
