import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./slider";
import "./Styling/main.css";
import "./Styling/bootstrap.min.css";
import "./Styling/aos.css";
import FadeIn from "react-fade-in";
import Header from "./Header";
import Table from "./table";
import { Link } from "react-router-dom";
import { getUser, removeUserSession } from "../../Utils/Common";
import Footer from "../CheckoutPage/Footer"
const { If, Then, Else } = require("react-if");

function TeachersProfile() {
  // let { name } = useParams();\var name
  const [Index, setIndex] = useState("");
  var butttonid;
  var id;
  var price;
  var time;
  var day;
  var url_string = window.location.href;
  var url = new URL(url_string);
  id = url.searchParams.get("id");
  price = url.searchParams.get("price");
  //console.log("aaaa");
  //   console.log(name);
  const [value, setValue] = useState(null);
     const user = getUser();
     var loginbutton;
     var name;
     if (!!user && !!user.name) {
       name = user.name;
     } else {
       name = "a";
     }
     
  function call2functions(val, id) {
    day = val;
    butttonid = id;
    bookfunction2();
    refreshPage();
  } 
  function refreshPage() {
      window.location.reload(false);
    }
  async function getSomething() {
    try {
      const response = await axios.get(`/api/teachers/searchbyid?id=${id}`);
      setValue(response.data);

      const {
        schedule: { Day },
      } = response.data;
      console.log(Day);
    } catch (error) {
      console.error(error);
    }
  }
  async function bookfunction() {
    try {
      const response = await axios.put(
        `/api/teachers/ids?id=${id}&email=${"adx"}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function bookfunction2() {
    try {
      const response = await axios.put(
        `/api/teachers/newx?id=${id}&index=${day}&buttonid=${butttonid}&`
      );
      setValue(response.data);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSomething();
  }, []);

  return (
    <div>
      {" "}
      <div>
        <Header />
      </div>
      {value &&
        value.map((data) => {
          return (
            <div>
              <div></div>
              <div className="page-content">
                <div>
                  <div className="profile-page">
                    <div className="wrappernew">
                      <div
                        className="page-header page-header-small"
                        filter-color="green"
                      >
                        <div
                          className="page-header-image"
                          data-parallax="true"
                          style={{
                            backgroundImage: 'url("images/cc-bg-1.jpg")',
                          }}
                        />
                        <div className="container">
                          <div className="content-center">
                            <div className="cc-profile-image">
                              <a href="#">
                                <img src="images/anthony.jpg" alt="Image" />
                              </a>
                            </div>
                            <div className="h2 title">{data.name}</div>
                            <p
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                margin: "3px",
                                fontStretch: "1px",
                              }}
                            >
                              Web Developer, Graphic Designer, Photographer
                            </p>
                            <a className="newbutton" href="#table">
                              Free Demo
                            </a>
                            <a className="newbutton" href="#">
                              Chat
                            </a>
                          </div>
                        </div>
                        <div className="section">
                          <div className="container">
                            <div className="button-container">
                              <a
                                className="btn btn-default btn-round btn-lg btn-icon"
                                href="#"
                                rel="tooltip"
                                title="Follow me on Facebook"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                              <a
                                className="btn btn-default btn-round btn-lg btn-icon"
                                href="#"
                                rel="tooltip"
                                title="Follow me on Twitter"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                              <a
                                className="btn btn-default btn-round btn-lg btn-icon"
                                href="#"
                                rel="tooltip"
                                title="Follow me on Google+"
                              >
                                <i className="fa fa-google-plus" />
                              </a>
                              <a
                                className="btn btn-default btn-round btn-lg btn-icon"
                                href="#"
                                rel="tooltip"
                                title="Follow me on Instagram"
                              >
                                <i className="fa fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section" id="about">
                    <div className="container">
                      <div className="card">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                              <div className="h4 mt-0 title">About</div>
                              {/* <p>
                                Hello! I am Anthony Barnett. Web Developer,
                                Graphic Designer and Photographer.
                              </p> */}
                              <p>{data.About}</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                              <div className="h4 mt-0 title">
                                Basic Information
                              </div>

                              <div className="row">
                                <div className="col-sm-4">
                                  <strong className="text-uppercase">
                                    Age:
                                  </strong>
                                </div>
                                <div className="col-sm-8">{data.age}</div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4">
                                  <strong className="text-uppercase">
                                    Email:
                                  </strong>
                                </div>
                                <div className="col-sm-8">{data.email}</div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4">
                                  <strong className="text-uppercase">
                                    Subjects:
                                  </strong>
                                </div>
                                <div className="col-sm-8">{data.subjects}</div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4">
                                  <strong className="text-uppercase">
                                    Rating
                                  </strong>
                                </div>
                                <div className="col-sm-8">
                                  <i
                                    class="fa fa-star"
                                    style={{
                                      fontSize: "20px",
                                      color: "#360f64",
                                      marginTop: "-100px",
                                    }}
                                  >
                                    &nbsp;&nbsp;
                                  </i>
                                  <small
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                      marginTop: "-100px",
                                      color: "black",
                                    }}
                                  >
                                    {data.Rating}&nbsp;
                                  </small>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4">
                                  <strong className="text-uppercase">
                                    Language:
                                  </strong>
                                </div>
                                <div className="col-sm-8">
                                  English, German, French
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section" id="schedule">
                    <div className="container">
                      <div id="table">
                        {" "}
                        {/* <div
          class="  "
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "60px",
          }} */}
                        <h3 className=" text-center" style={{ margin: "30px" }}>
                          Schedule
                        </h3>
                        <div className="table100 ver1 m-b-110">
                          <div className="table100-head">
                            <table>
                              <thead>
                                <tr className="row100 head">
                                  <th
                                    className="cell100 column1"
                                    style={{ backgroundColor: "#360f64" }}
                                  >
                                    Subject
                                  </th>
                                  <th
                                    className="cell100 column2"
                                    style={{ backgroundColor: "#360f64" }}
                                  >
                                    Price
                                  </th>
                                  <th
                                    className="cell100 column3"
                                    style={{ backgroundColor: "#360f64" }}
                                  >
                                    Day
                                  </th>
                                  <th
                                    className="cell100 column4"
                                    style={{ backgroundColor: "#360f64" }}
                                  >
                                    Time
                                  </th>
                                  <th
                                    className="cell100 column5"
                                    style={{ backgroundColor: "#360f64" }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="cell100 column6"
                                    style={{ backgroundColor: "#360f64" }}
                                  ></th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                          <div className="table100-body js-pscroll">
                            {data.schedule &&
                              data.schedule.map((data2, index) => {
                                // day = index;
                                return (
                                  <table>
                                    {console.log(index, "phala")}
                                    <tbody>
                                      <tr className="row100 body">
                                        <td className="cell100 column1">
                                          {data2.Subject}
                                        </td>
                                        <td className="cell100 column2">
                                          {data2.Price}
                                        </td>
                                        <td className="cell100 column3">
                                          {data2.Day}
                                        </td>
                                        <td className="cell100 column4">
                                          {data2.Time}
                                        </td>
                                        <td className="cell100 column5">
                                          {data2.Date}
                                        </td>
                                        <td className="cell100 column6 ">
                                          <If condition={name != "a"}>
                                            <Then>
                                              <Link
                                                to={`/Checkout?bookingid=${
                                                  data2._id
                                                }&index=${index}&teacherid=${id}&teachername=${data.name}&Subject=${
                                                  data2.Subject
                                                }&Date=${data2.Date}&Price=${data2.Price}&Time=${
                                                  data2.Time
                                                }&Day=${data2.Day}`}
                                              >
                                                <a
                                                  className="newbutton2"
                                                  style={{ color: "white" }}
                                                  // onClick={() => {
                                                  //   call2functions(index, data2._id);
                                                  // }}
                                                >
                                                  {data2.Status}x
                                                </a>{" "}
                                              </Link>
                                            </Then>
                                            <Else>
                                              <Link
                                                to={`/Login?userid=${"None"}&bookingid=${
                                                  data2._id
                                                }&index=${index}&teacherid=${id}&Price=${data2.Price}&Subject=${
                                                  data2.Subject
                                                }&Date=${data2.Date}&Time=${
                                                  data2.Time
                                                }&Day=${data2.Day}&teachername=${data.name}`}
                                              >
                                                <If
                                                  condition={
                                                    data2.Status == "Booked"
                                                  }
                                                >
                                                  <Then>
                                                    <button
                                                      type="button"
                                                      disabled
                                                      class="newbutton3"
                                                    >
                                                     Booked
                                                    </button>
                                                  </Then>
                                                  <Else>
                                                    {" "}
                                                    <a
                                                      className="newbuttonx"
                                                      style={{ color: "white" }}
                                                      // onClick={() => {
                                                      //   call2functions(index, data2._id);
                                                      // }}
                                                    >
                                                      {data2.Status}
                                                    </a>{" "}
                                                  </Else>
                                                </If>
                                              </Link>
                                            </Else>
                                          </If>
                                        </td>
                                        {/* <td className="cell100 column5 ">
                                          {" "}
                                          used this too add details to schedule
                                          <a
                                            className="newbutton2"
                                            style={{ color: "white" }}
                                            onClick={bookfunction}
                                          >
                                            Bookxx
                                            {data2.Status}
                                          </a>
                                        </td> */}
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
                  <div className="section" id="experience">
                    <div className="container cc-experience">
                      <div className="h4 text-center mb-4 title">
                        Work Experience
                      </div>
                      <div className="card">
                        {data.work &&
                          data.work.map((data4) => {
                            return (
                              <div className="row">
                                <div className="col-md-3 ">
                                  <div className="card-body cc-experience-header">
                                    <p>
                                      {data4.startDate} - {data4.endDate}
                                    </p>
                                    <div className="h5">{data4.place}</div>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                  <div className="card-body">
                                    <div className="h5">{data4.title}</div>
                                    <p>{data4.details}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className="section" id="education">
                    <div className="container cc-education">
                      <div className="h4 text-center mb-4 title">Education</div>
                      <div className="card">
                        {data.education &&
                          data.education.map((data5) => {
                            return (
                              <div className="row">
                                <div
                                  className="col-md-3 "
                                  data-aos-duration={500}
                                >
                                  <div className="card-body cc-education-header">
                                    <p>
                                      {data5.startDate} - {data5.endDate}
                                    </p>
                                    <div className="h5">
                                      {data5.level}'s Degree
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="col-md-9"
                                  data-aos-duration={500}
                                >
                                  <div className="card-body">
                                    <div className="h5">{data5.field}</div>
                                    <p className="category">
                                      {data5.institute}
                                    </p>
                                    <p>
                                      Euismod massa scelerisque suspendisse
                                      fermentum habitant vitae ullamcorper magna
                                      quam iaculis, tristique sapien taciti
                                      mollis interdum sagittis libero nunc
                                      inceptos tellus, hendrerit vel eleifend
                                      primis lectus quisque cubilia sed mauris.
                                      Lacinia porta vestibulum diam integer
                                      quisque eros pulvinar curae, curabitur
                                      feugiat arcu vivamus parturient aliquet
                                      laoreet at, eu etiam pretium molestie
                                      ultricies sollicitudin dui.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      {/* <div className="card">
                        <div className="row">
                          <div
                            className="col-md-3 bg-primary"
                            data-aos-duration={500}
                          >
                            <div className="card-body cc-education-header">
                              <p>2009 - 2013</p>
                              <div className="h5">Bachelor's Degree</div>
                            </div>
                          </div>
                          <div className="col-md-9" data-aos-duration={500}>
                            <div className="card-body">
                              <div className="h5">
                                Bachelor of Computer Science
                              </div>
                              <p className="category">
                                University of Computer Science
                              </p>
                              <p>
                                Euismod massa scelerisque suspendisse fermentum
                                habitant vitae ullamcorper magna quam iaculis,
                                tristique sapien taciti mollis interdum sagittis
                                libero nunc inceptos tellus, hendrerit vel
                                eleifend primis lectus quisque cubilia sed
                                mauris. Lacinia porta vestibulum diam integer
                                quisque eros pulvinar curae, curabitur feugiat
                                arcu vivamus parturient aliquet laoreet at, eu
                                etiam pretium molestie ultricies sollicitudin
                                dui.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="row">
                          <div
                            className="col-md-3 bg-primary"
                            data-aos-duration={500}
                          >
                            <div className="card-body cc-education-header">
                              <p>2007 - 2009</p>
                              <div className="h5">High School</div>
                            </div>
                          </div>
                          <div className="col-md-9" data-aos-duration={500}>
                            <div className="card-body">
                              <div className="h5">Science and Mathematics</div>
                              <p className="category">
                                School of Secondary board
                              </p>
                              <p>
                                Euismod massa scelerisque suspendisse fermentum
                                habitant vitae ullamcorper magna quam iaculis,
                                tristique sapien taciti mollis interdum sagittis
                                libero nunc inceptos tellus, hendrerit vel
                                eleifend primis lectus quisque cubilia sed
                                mauris. Lacinia porta vestibulum diam integer
                                quisque eros pulvinar curae, curabitur feugiat
                                arcu vivamus parturient aliquet laoreet at, eu
                                etiam pretium molestie ultricies sollicitudin
                                dui.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div><Footer></Footer></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TeachersProfile;