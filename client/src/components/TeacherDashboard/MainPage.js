import React from "react";
import "./DashboardMain.css";
import Table from "./table";
import Calender from "./Calender/Calender";
import DashboardMain from "./DashboardMain";
import CardX from "./CardX/CardX";
function MainPage() {
  return (
    <div>
      <div className="wrapper">
       <DashboardMain />
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
          <CardX />

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
              {/* <Charbox /> */}
              <Calender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;