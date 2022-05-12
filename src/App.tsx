import React from "react";
import ProductsListing from "./components/Products-Listing";
import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import ProductDetails from "./components/Product-Details";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<ProductsListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
