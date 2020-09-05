import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from "./state/store/configureStore";
import { StripeProvider } from "react-stripe-elements";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://bidspace.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_QicERB8w3kyqaYW3hUUQylRH">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
