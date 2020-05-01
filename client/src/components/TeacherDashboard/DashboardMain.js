import React from "react";
import "./DashboardMain.css";
import Headera from "./Headera";
// import Table from "./table";
// import Image from "./Image";
// import Charbox from "./Chatbox/Charbox";
// import Calender from "./Calender/Calender";
import CardX from "./CardX/CardX";
function DashboardMain() {
  return (
    
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
              <a href="#">
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
                <i className="fa fa-project-diagram" />
                Messages
              </a>
            </li>
            <li>
              <a href="#schedule">
                <i className="fa fa-blog" />
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
       
  );
}

export default DashboardMain;