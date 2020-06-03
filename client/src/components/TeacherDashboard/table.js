import React from "react";
import DashboardMain from "./DashboardMain";
import "./table.css";
const table = () => {
  return (
    <div id="bookings">
      {" "}
      {/* <div
          class="  "
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "60px",
          }} */}
      <h3 className=" text-center" style={{ margin: "30px" }}>
        My Bookings
      </h3>
      <div className="table100 ver1 m-b-110">
        <div className="table100-head">
          <table>
            <thead>
              <tr className="row100 head">
                <th className="cell100 column1">Student name</th>
                <th className="cell100 column2">Subject</th>
                <th className="cell100 column3">Time</th>
                <th className="cell100 column4">Day</th>
                <th className="cell100 column5">Date</th>
                <th className="cell100 column6">Price</th>
                <th className="cell100 column7">Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table100-body js-pscroll">
          <table>
            <tbody>
              <tr className="row100 body">
                <td className="cell100 column1">Amna Ahmed</td>
                <td className="cell100 column2">Maths</td>
                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                <td className="cell100 column4">27 May 2020</td>
                <td className="cell100 column5">Wednesday</td>
                <td className="cell100 column6">250</td>
                <td className="cell100 column7">Scheduled</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Rasheeda Abbas</td>
                <td className="cell100 column2">Computer</td>
                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                <td className="cell100 column4">29 March 2020</td>
                <td className="cell100 column5">Friday</td>
                <td className="cell100 column6">250</td>
                <td className="cell100 column7">Scheduled</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Sami Khan</td>
                <td className="cell100 column2">Maths</td>
                <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                <td className="cell100 column4">30 March 2020</td>
                <td className="cell100 column5">Sunday</td>
                <td className="cell100 column6">250</td>
                <td className="cell100 column7" style={{ color: "red" }}>
                  Cancelled
                </td>
              </tr>
              
              
              
              <tr className="row100 body">
                <td className="cell100 column1">Like a butterfly</td>
                <td className="cell100 column2">Boxing</td>
                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                <td className="cell100 column4">Aaron Chapman</td>
                <td className="cell100 column5">10</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Mind &amp; Body</td>
                <td className="cell100 column2">Yoga</td>
                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                <td className="cell100 column4">Adam Stewart</td>
                <td className="cell100 column5">15</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Crit Cardio</td>
                <td className="cell100 column2">Gym</td>
                <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                <td className="cell100 column4">Aaron Chapman</td>
                <td className="cell100 column5">10</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Wheel Pose Full Posture</td>
                <td className="cell100 column2">Yoga</td>
                <td className="cell100 column3">7:00 AM - 8:30 AM</td>
                <td className="cell100 column4">Donna Wilson</td>
                <td className="cell100 column5">15</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Playful Dancer's Flow</td>
                <td className="cell100 column2">Yoga</td>
                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                <td className="cell100 column4">Donna Wilson</td>
                <td className="cell100 column5">10</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Zumba Dance</td>
                <td className="cell100 column2">Dance</td>
                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                <td className="cell100 column4">Donna Wilson</td>
                <td className="cell100 column5">20</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Cardio Blast</td>
                <td className="cell100 column2">Gym</td>
                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                <td className="cell100 column4">Randy Porter</td>
                <td className="cell100 column5">10</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Pilates Reformer</td>
                <td className="cell100 column2">Gym</td>
                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                <td className="cell100 column4">Randy Porter</td>
                <td className="cell100 column5">10</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Supple Spine and Shoulders</td>
                <td className="cell100 column2">Yoga</td>
                <td className="cell100 column3">6:30 AM - 8:00 AM</td>
                <td className="cell100 column4">Randy Porter</td>
                <td className="cell100 column5">15</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Yoga for Divas</td>
                <td className="cell100 column2">Yoga</td>
                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                <td className="cell100 column4">Donna Wilson</td>
                <td className="cell100 column5">20</td>
              </tr>
              <tr className="row100 body">
                <td className="cell100 column1">Virtual Cycle</td>
                <td className="cell100 column2">Gym</td>
                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                <td className="cell100 column4">Randy Porter</td>
                <td className="cell100 column5">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default table;
