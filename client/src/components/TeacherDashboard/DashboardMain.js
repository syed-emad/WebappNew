import React, { useEffect, useState } from "react";
import "./DashboardMain.css";
import Headera from "./Headera";
import Table from "./table";
import { getUser, removeUserSession } from "../../Utils/Common";
import { Link } from "react-router-dom";
import Image from "./Image";
import Charbox from "./Chatbox/Charbox";
import axios from "axios";
function DashboardMain(props) {
  const Teacher = getUser();
  var url_string = window.location.href;
  var url = new URL(url_string);
  var name = url.searchParams.get("name");
  var id = url.searchParams.get("id");
  console.log(name);
  console.log("ID:");
  console.log(id);
  const [value, setValue] = useState(null);
  async function getSomething() {
    try {
      const response = await axios.get(`/api/teachers/dash?id=${id}`);
      setValue(response.data);
      console.log("Hi");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/TeacherLogin");
  };
  useEffect(() => {
    getSomething();
  }, []);

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
              <a href="/messages">
                <i className="fa fa-envelope" />
                Messages
              </a>
            </li>
            <li>
              <a href="#schedule">
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
                Welcome {name} {Teacher.Qualification}!! Have a nice day.{" "}
              </a>
            </div>
            <div class="pull-right" style={{ margin: "10px" }}>
              <a onClick={handleLogout}>Logout</a>
            </div>
          </div>
          <div className="info">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
              <br></br>
              <br></br>
              <hr></hr>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
