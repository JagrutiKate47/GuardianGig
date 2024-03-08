import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BuyerUserP from "./pages/BuyerUserP";
import SellerUserP from "./pages/SellerUserP";
import Signup from "./pages/Signup";
import CategoryDetails from "./pages/CategoryDetails";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buyer" element={<BuyerUserP />} />
        <Route path="/seller" element={<SellerUserP />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:category" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

