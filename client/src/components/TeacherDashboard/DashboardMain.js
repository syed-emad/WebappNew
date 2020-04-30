import React from "react";
import "./DashboardMain.css";
import Headera from "./Headera";
import Table from "./table";
import Image from "./Image";
import Charbox from "./Chatbox/Charbox";
function DashboardMain() {
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
              <a href="#">
                <i className="fa fa-project-diagram" />
                portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-blog" />
                Blogs
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-address-book" />
                Contact
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-pin" />
                Map
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
              <Charbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
