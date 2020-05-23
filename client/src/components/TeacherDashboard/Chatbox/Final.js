import React from "react";
import "../DashboardMain.css";

import Charbox from "./Charbox";
function Final() {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <div
            className="logo"
            style={{
              marginLeft: "9px",
            }}
          >
            <img src="images/logo.png" alt="" />
            <a
              href="#"
              style={{
                fontFamily: "Montserrat",
                marginLeft: "5px",
                marginRight: "2px",
                fontSize: "18px",
              }}
            >
              PROFESSOR
            </a>
          </div>
          <br></br>
          <ul>
            <li>
              <a href="/TeacherDashboard">
                <i className="fa fa-home" />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user" />
                Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-address-card" />
                About
              </a>
            </li>
            <li>
              <a href="/TeacherDashboard/messages">
                <i className="fa fa-envelope" />
                Messages
              </a>
            </li>
            <li>
              <a href="/schedule">
                <i className="fa fa-calendar" />
                My Schedule
              </a>
            </li>
            <li>
              <a href="#bookings">
                <i className="fa fa-address-book" />
                My Bookings
              </a>
            </li>
          </ul>
          <div className="social_media">
            <a href="#">
              <i className="fa fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className="main_content">
          <div className="headerx">
            <div class="pull-left">
              {" "}
              <img
                src="images/img_avatar.png"
                alt="Avatar"
                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
              />
              <a style={{ marginLeft: "5px" }}>
                {" "}
                Welcome User Name!! Have a nice day.{" "}
              </a>
            </div>
          </div>
          <div className="info">
            <div>
              <br></br>
              <br></br>
              <hr></hr>

              <Charbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;
