import React from "react";
import { getUser, removeUserSession } from "../../Utils/Common";
import ChannelForm from "./ChannelForm";
const { If, Then, Else } = require("react-if");
function Header(props) {
var url_string = window.location.href;
var url = new URL(url_string);
var channelstring = url.searchParams.get("name");
var userid = url.searchParams.get("id");
var teacherid = url.searchParams.get("teaceherid"); 

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
       
      {/* Header */}
      <header className="headervideo">
        
        <div className="headervideo_content d-flex flex-row align-items-center justify-content-start">
          {/* Logo */}
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <a
              href="\"
              style={{
                fontFamily: "Montserrat",
                marginLeft: "5px",
              }}
            >
              PROFESSOR
            </a>
          </div>

          {/* Header Nav */}
          <div className="headervideo_right d-flex flex-row align-items-center justify-content-start ml-auto">
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <button>
                    <a href="" class="newbutton4">
                      End Meeting
                    </a>
                  </button>
                </li>
                <li>
                 
                  <button>
                    <a href="" class="newbutton4">
                     <ChannelForm selectChannel={this.selectChannel} />
                    </a>
                  </button>
                </li>
                <li className="active">
                  <a href="\">Home</a>
                </li>
                <li>
                  <a href="#">Become a Tutor</a>
                </li>{" "}
                */}
              </ul>
            </nav>
          </div>
          <div className="headervideo_right d-flex flex-row align-items-center justify-content-start ml-auto">
            <div className="log_reg">
              <If condition={name != "a"}>
                <Then>
                  <span className="ok">
                    <li>
                      <a> Welcome {name}!</a>
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
    </div>
  );
}

export default Header;
