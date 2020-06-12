import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";
function  Admin(props) {
const [value, setValue] = useState(null);
const [valueuser, setValue2] = useState(null);
const [ID, setID] = useState("");
 function refreshPage() {
   window.location.reload(false);
 }

 function Callfunction(id){
deleteteacher(id);
    refreshPage();
 }
 function Callfunctionuser(id){
    deleteuser(id);    
    refreshPage();
 }
   async function getSomething() {
     try {
       const response = await axios.get(`/api/teachers`);

       console.log(response.data);
       setValue(response.data);
     } catch (error) {
       console.error(error);
     }
   }
   async function getSomething2() {
     try {
       const response = await axios.get(`/api/users`);

       console.log(response.data);
       setValue2(response.data);
     } catch (error) {
       console.error(error);
     }
   }
    async function deleteteacher(id) {
      try {
        const response = await axios.delete(`/api/teachers/teacherdelete?id=${id}`);

        console.log(response.data);
        setValue(response.data);
      } catch (error) {
        console.error(error);
      }
    }
       async function deleteuser(id) {
      try {
        const response = await axios.delete(`/api/users/userdelete?id=${id}`);

        console.log(response.data);
        setValue(response.data);
      } catch (error) {
        console.error(error);
      }
    }
useEffect(() => {
  getSomething();
  getSomething2();
}, []);
 
    {
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
                {/* <Link to={`/TeacherDashboard?name=${data.name}&id=${data._id}/schedule`}> */}
                <a href="#schedule">
                  <i className="fa fa-calendar" />
                  Teachers
                </a>
                {/* </Link> */}
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
                  src="images/team2.jpg"
                  alt="Avatar"
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <a style={{ marginLeft: "5px" }}> </a>
              </div>
              <div class="pull-right" style={{ margin: "10px" }}>
                <a>Logout</a>
              </div>
            </div>
            <div className="info">
              <div>
                <div className="" id="teacherstable">
                  <h3 className=" text-center" style={{ margin: "30px" }}>
                Teachers
                  </h3>
                  <div className="table100 ver1 m-b-110">
                    <div className="table100-head">
                      <table>
                        <thead>
                          <tr className="row100 head">
                            <th className="cell100 column1">Subject</th>
                            <th className="cell100 column2">Day</th>
                            <th className="cell100 column3">Time</th>
                            <th className="cell100 column4">Date</th>
                            <th className="cell100 column5">Price</th>
                            <th className="cell100 column6"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="table100-body js-pscroll">
                      {value &&
                        value.map((data, index) => {
                          // day = index;
                          return (
                            <table>
                              {console.log(index, "phala")}
                              <tbody>
                                <tr className="row100 body">
                                  <td className="cell100 column1">
                                    {data.name}
                                  </td>
                                  <td className="cell100 column2">
                                    {" "}
                                    {data.email}{" "}
                                  </td>
                                  <td className="cell100 column5">
                                    {data.About}
                                  </td>
                                  <td className="cell100 column3">
                                    {data.subjects}
                                  </td>
                                  <td className="cell100 column4">
                                    {data.City}
                                  </td>
                                  <td className="cell100 column5">
                                    {data.Price}
                                  </td>
                                  <td className="cell100 column8">
                                    <button
                                      type="button"
                                      onClick={() => {}}
                                      class="purplebutton"
                                    >
                                      Education
                                    </button>
                                  </td>
                                  <td className="cell100 column8">
                                    <button
                                      type="button"
                                      onClick={() => {}}
                                      class="purplebutton"
                                    >
                                      Work
                                    </button>
                                  </td>
                                  <td className="cell100 column6">
                                    <button
                                      type="button"
                                      onClick={() => {}}
                                      class="purplebutton"
                                    >
                                      Schedule
                                    </button>
                                  </td>
                                  <td className="cell100 column7">
                                    <button
                                      type="button"
                                      onClick={() => {}}
                                      class="purplebutton"
                                    >
                                      Bookings
                                    </button>
                                  </td>
                                  <td className="cell100 column8">
                                    <button
                                      type="redbutton"
                                      onClick={() => {
                                        Callfunction(data._id);
                                      }}
                                      class="redbutton"
                                    >
                                      Delete Record
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="" id="userstable">
                  <h3 className=" text-center" style={{ margin: "30px" }}>
                    Users
                  </h3>
                  <div className="table100 ver1 m-b-110">
                    <div className="table100-head">
                      <table>
                        <thead>
                          <tr className="row100 head">
                            <th className="cell100 column1">Subject</th>
                            <th className="cell100 column2">Day</th>
                            <th className="cell100 column3">Time</th>
                            <th className="cell100 column4">Date</th>
                            <th className="cell100 column5">Price</th>
                            <th className="cell100 column6"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="table100-body js-pscroll">
                      {valueuser &&
                        valueuser.map((data, index) => {
                          // day = index;
                          return (
                            <table>
                              {console.log(index, "phala")}
                              <tbody>
                                <tr className="row100 body">
                                  <td className="cell100 column1">
                                    {data._id}
                                  </td>
                                  <td className="cell100 column2">
                                    {" "}
                                    {data.name}{" "}
                                  </td>
                                  <td className="cell100 column5">
                                    {data.register_date}
                                  </td>
                                  <td className="cell100 column3">
                                    {data.email}
                                  </td>
                                  <td className="cell100 column7">
                                    <Link to={`./userbookingsa?name=${data.name}&id=${data._id}`}>
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        class="purplebutton"
                                      >
                                        Bookings
                                      </button>
                                    </Link>
                                  </td>
                                  <td className="cell100 column8">
                                    <button
                                      type="redbutton"
                                      onClick={() => {
                                        Callfunctionuser(data._id);
                                      }}
                                      class="redbutton"
                                    >
                                      Delete Record
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
