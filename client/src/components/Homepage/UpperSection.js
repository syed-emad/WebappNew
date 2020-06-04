
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { setUserSession } from "../../Utils/Common";
import { getUser, removeUserSession } from "../../Utils/Common";
import UserProfile from "../UserProfile/UserProfile";
import Session from "../UserProfile/Session";
import axios from "axios";
import "../Styling/styles/bootstrap-4.1.2/bootstrap.min.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/animate.css";
import "../Styling/styles/main_styles.css";
import "../Styling/styles/responsive.css";
import "./loginstyle.css";
const { If, Then, Else } = require("react-if");

function UpperSection(props) {
  
  const [searchedsubject, setName] = useState("");
  const user = getUser();
  var loginbutton;
  var name;
  const email = useFormInput("");
  const password = useFormInput("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null); 
  //Logout
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/");
  };
  //Pagerefresh
  function refreshPage() {
    window.location.reload(false);
  }
 
  //LoginCondition
  if (!!user && !!user.name) 
  {
        name = user.name;
      } 
  else 
  {
        name = "a";
      }
  //Call2functions
  function callfunctions() {
  handleClose();
  handleLogin();
  }
  //LoginApi
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("/x/signin", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        console.log(response.data.user.id);
        UserProfile.setName(response.data.user.name);
        Session.setSession("true" );
        console.log(Session.getSession(),"EMAD");
        console.log(UserProfile.getName())
      
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };
  //CheckingSession
  async function checkSession() {
    try {
      const response = await axios.get(
        `/api/users/session?sessionValue=${Session.getSession()}&id=${Session.getId()}`
      );
      
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // checkSession();
  }, []);
  return (
    <div>
      <div>
        <div className="menu">
          <div className="menu_container text-right">
            <div className="menu_close">close</div>
            <nav className="menu_nav">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </nav>
            <div className="menu_link">
              <a href="#">+Add Listing</a>
            </div>
          </div>
        </div>
        <div className="super_container">
          {/* Header */}
          <header className="header">
            <div className="header_overlay" />
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
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
              <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
                <nav className="main_nav">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#aboutus">About us</a>
                    </li>
                    <li>
                      <a href="#howitworks">How it works?</a>
                    </li>
                    <li>
                      <Link to={`/search?name=${searchedsubject}`}>
                        {" "}
                        <a href="#">Find a Tutor</a>
                      </Link>
                    </li>
                    <li>
                      <a href="#becomeatutor">Become a Tutor</a>
                    </li>
                  </ul>
                </nav>
                <div className="log_reg">
                  <If condition={name != "a"}>
                    <Then>
                      <span className="ok">
                        <li>
                          <a> Welcome {UserProfile.getName()}!</a>
                        </li>
                        <li>
                          <a onClick={removeUserSession()}>Logout</a>
                        </li>
                      </span>
                    </Then>
                    <Else>
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li>
                          <button className="buttonlogin" onClick={handleShow}>
                            <a>Login</a>
                          </button>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title class="center"> Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form className="login100-form2 validate-form">
                                <div
                                  className="wrap-input100 validate-input"
                                  data-validate="Valid email is required: ex@abc.xyz"
                                >
                                  <input
                                    className="input100"
                                    name="email"
                                    placeholder="Email"
                                    type="text"
                                    {...email}
                                    autoComplete="new-password"
                                  />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div
                                  className="wrap-input100 validate-input"
                                  data-validate="Password is required"
                                >
                                  <input
                                    className="input100"
                                    name="pass"
                                    placeholder="Password"
                                    type="password"
                                    {...password}
                                    autoComplete="new-password"
                                  />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                    <i
                                      className="fa fa-lock"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>

                                <div className="text-center p-t-12">
                                  <span className="txt1">Forgot &nbsp;</span>
                                  <a className="txt2">Username / Password?</a>
                                </div>
                                <div className="text-center p-t-13">
                                  <a className="txt2" href="\Register">
                                    Create your Account
                                    <i
                                      className="fa fa-long-arrow-right m-l-5"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                              </form>
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="container-login100-form-btn">
                                <button
                                  className="login100-form-btn"
                                  value={loading ? "Loading..." : "Login"}
                                  
                                  disabled={loading}
                                   
                                  onClick={() => {
                                                       callfunctions();
                                                       }}
                                >
                                  Login
                                </button>
                              </div>
                            </Modal.Footer>
                          </Modal>
                        </li>
                        <li>
                          {" "}
                          <button
                            className="buttonlogin"
                            style={{ fontSize: "10px" }}
                          >
                            <a href="/Register">Register</a>
                          </button>
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
          <div className="super_container_inner">
            <div className="super_overlay" />
            {/* Home */}
            <div className="home">
              {/* Home Slider */}
              <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                  {/* Slide */}
                  <div className="slide">
                    <div
                      className="background_image"
                      style={{
                        backgroundImage: "url(images/Tpic4.jpg)",
                      }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center">
                              <div className="home_title">
                                <h1>
                                  Here <span>Tutoring</span> Begins
                                </h1>
                              </div>
                              <div className="search_form_container">
                                <form
                                  action="#"
                                  className="search_form"
                                  id="search_form"
                                >
                                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                    <input
                                      type="text"
                                      name="name"
                                      className="search_input"
                                      placeholder="Which subject you want to learn?"
                                      required="required"
                                      onChange={(event) =>
                                        setName(event.target.value)
                                      }
                                    />
                                    <Link
                                      to={`/search?name=${searchedsubject}`}
                                    >
                                      <button className="search_button">
                                        Find Tutor
                                      </button>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Slide */}
                  <div className="slide">
                    <div
                      className="background_image"
                      style={{
                        backgroundImage: "url(images/Tpic5.jpg)",
                      }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center">
                              <div className="home_title">
                                <h1>
                                  Here <span>Tutoring</span> Begins
                                </h1>
                              </div>
                              <div className="search_form_container">
                                <form
                                  action="#"
                                  className="search_form"
                                  id="search_form"
                                >
                                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                    <input
                                      type="text"
                                      name="name"
                                      className="search_input"
                                      placeholder="Which subject you want to learn?"
                                      required="required"
                                      onChange={(event) =>
                                        setName(event.target.value)
                                      }
                                    />
                                    <Link
                                      to={`/search?name=${searchedsubject}`}
                                    >
                                      <button className="search_button">
                                        Find Tutor
                                      </button>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Home Slider Dots */}
                <div className="home_slider_dots">
                  <ul
                    id="home_slider_custom_dots"
                    className="home_slider_custom_dots"
                  >
                    <li className="home_slider_custom_dot active">01.</li>
                    <li className="home_slider_custom_dot">02.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="categories">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="categories_container d-flex flex-md-row flex-column align-items-start justify-content-start">
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_1.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Maths</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_2.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">English</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_3.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Physics</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_4.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Chemestry</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_5.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">And Others</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="locations2 container_custom" id="aboutus">
              <div className="container">
                <div className="row">
                  <div
                    className="col"
                    style={{
                      paddingBottom: "150px",
                    }}
                  >
                    <div className="section_title text-center">
                      <h1>About Professor</h1>
                      <p>
                        Having trouble in doing your maths homework?cant
                        understand the complicated topics of chemistry? or just
                        strugling to learn a language? We got you covered!{" "}
                        <br />
                        Our tutors goes thorugh a in depth verification process
                        to be able to reach the standard to teach you. So feel
                        free to book a lesson and get help in your desire
                        subjects.For any quries you are more than welcome to
                        contact us.
                      </p>
                    </div>
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
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
export default UpperSection;
