import React from "react";
import "./App.css";
import ProductsListing from "./components/Products-Listing";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <ProductsListing />
    </>
  );
}

export default App;
