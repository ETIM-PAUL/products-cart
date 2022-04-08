import React from "react";
import "./App.css";
import ProductsListing from "./components/Products-Listing";
import TopNav from "./components/TopNav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <TopNav />
      <ProductsListing />
    </>
  );
}

export default App;
