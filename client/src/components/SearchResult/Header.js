import React from "react";
import { getUser, removeUserSession } from "../../Utils/Common";
import UserProfile from "../UserProfile/UserProfile";
const { If, Then, Else } = require("react-if");
function Header(props) {
  const user = getUser();
 
var name;
if (!!user && !!user.name) {
  name = user.name;
} else {
  name = "a";
}
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
      {/* Header */}
      <header className="header" style={{ backgroundColor: "#360f64" }}>
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          {/* Logo */}
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <a href="\" style={{ fontFamily: "Montserrat", marginLeft: "5px" }}>
              PROFESSOR
            </a>
          </div>

          {/* Header Nav */}
          <div className="header_right d-flex flex-row align-items-center justify-content-start m-auto">
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li className="active">
                  <a href="\">Home</a>
                </li>
                <li>
                  <a href="#">Become a Tutor</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            <div className="log_reg">
              <If condition={name != "a"}>
                <Then>
                  <span className="ok">
                    <li>
                      <a> Welcome {UserProfile.getName()}!</a>
                    </li>
                    <li>
                      <a onClick={removeUserSession()}>Logout</a>
                    </li>
                  </span>
                </Then>
                <Else>
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="/Login">Login </a>
                    </li>
                    <li>
                      <a href="/Register">Register</a>
                    </li>
                  </ul>
                </Else>
              </If>
            </div>
            <div className="hamburger">
              <i className="fa fa-bars trans_200" />
            </div>
          </div>
        </div>
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />>
    </div>
  );
}

export default Header;
