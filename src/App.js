import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Wishlist from "./router/wishlist/Wishlist";
import Header from "./components/header/Header";
import SingleRoute from "./router/single-route/SingleRoute";

function App() {
   return (
      <div className="App">
         <Header />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<SingleRoute />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
