import React, { Component } from "react";

import Headera from "./Headera";
import CheckoutCard from "./CheckoutCard";
import Footer from "./Footer";
import Success from "./Success";
function Checkout(props) {
  {
    return (
      <div>
        <Headera />
        <CheckoutCard />
        <Footer />
      </div>
    );
  }
}
export default Checkout;