import React, { Component } from "react";
import UpperSection from "./UpperSection";
import Footer from "./Footer";
import Howitwors from "./Howitworks";
import BecomeTeacher from "./BecomeTeacher";
export default class HomeFinal extends Component {
  render() {
    return (
      <div>
        <UpperSection />
        <Howitwors />
        <BecomeTeacher />
        <Footer />
      </div>
    );
  }
}