import React, { Component } from "react";
import "../Styling/styles/bootstrap-4.1.2/bootstrap.min.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/animate.css";
import "../Styling/styles/main_styles.css";
import "../Styling/styles/responsive.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className="header" style={{ backgroundColor: "#360f64" }}>
          <div className="header_overlay" />
          <div className="header_content d-flex flex-row align-items-center justify-content-start" style={{height:"100px"}}>
            {/* Logo */}
            <div className="logo">
              <img src="images/logo.png" alt="" />
              <a
                href="/"
                style={{ fontFamily: "Montserrat", marginLeft: "5px" }}
              >
                PROFESSOR
              </a>
            </div>
            {/* Header Nav */}
            <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
              <nav className="main_nav"></nav>
              <div className="log_reg">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li>
                    <a href="/login-teacher">Login </a>
                  </li>
                  <li>
                    <a href="/TeacherSignup">Register</a>
                  </li>
                </ul>
              </div>
              <div className="hamburger">
                <i className="fa fa-bars trans_200" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}