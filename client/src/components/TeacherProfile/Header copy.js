import React from "react";
import { Link } from "react-router-dom";
import { getUser, removeUserSession } from "../../Utils/Common";

function Header(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          {/* Logo */}
         
          {/* Header Nav */}
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li class="nav-item" style={{ margin: "0px" }}>
                  <a class="nav-link smooth-scroll" href="#about">
                  
                  </a>
                </li>
                <li class="nav-item" style={{ margin: "0px" }}>
                  <a class="nav-link smooth-scroll" href="#schedule">
                    
                  </a>
                </li>
                <li class="nav-item" style={{ margin: "0px" }}>
                  <a class="nav-link smooth-scroll" href="#experience">
                   
                  </a>
                </li>
                <li class="nav-item" style={{ margin: "0px" }}>
                  <a class="nav-link smooth-scroll" href="#education">
                   
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link smooth-scroll" href="#contact">
                    Contact
                  </a>
                </li> */}
              </ul>
            </nav>
            
            <div className="hamburger">
              <i className="fa fa-bars trans_200" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
