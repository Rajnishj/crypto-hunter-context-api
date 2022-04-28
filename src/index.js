import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CrypotoContext from "./CrypotoContext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <CrypotoContext>
    <App />
  </CrypotoContext>,
  document.getElementById("root")
);
