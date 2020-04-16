import React, { Component } from "react";
import TeacherSignup from "./TeacherSignup";
import Header from "./Header";
export default class TeacherFinal extends Component {
  render() {
    return (
      <div>
        <Header />
        <TeacherSignup />
      </div>
    );
  }
}