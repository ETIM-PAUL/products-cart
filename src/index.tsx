import React from "react";
import createRoot from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { getTotals } from "./redux/cartSlice";
import { store } from "./redux/store";
import "./styles/utils.css";

const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});

store.dispatch(getTotals());

createRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
