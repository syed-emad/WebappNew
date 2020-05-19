import React, { useEffect, useState } from "react";
import axios from "axios";
// import Slider from "./slider";
import "./Styling/main.css";
import "./Styling/bootstrap.min.css";
import "./Styling/aos.css";
import FadeIn from "react-fade-in";
import Header from "./Header";
import Table from "./table";
//waitimport { Link } from "react-router-dom";
function TP() {
  // let { name } = useParams();\var name
  var name;
  var price;
  var time;
  var day;
  var url_string = window.location.href;
  var url = new URL(url_string);
  name = url.searchParams.get("name");
  price = url.searchParams.get("price");
  //console.log("aaaa");
  //   console.log(name);
  const [value, setValue] = useState(null);

  async function getSomething() {
    try {
      const response = await axios.get(`/api/teachers/search?name=${name}`);
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSomething();
  }, []);

  {value &&
    value.map((data) => {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
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
                  style={{ backgroundImage: 'url("images/cc-bg-1.jpg")' }}
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
                      <p>
                        Hello! I am Anthony Barnett. Web Developer, Graphic
                        Designer and Photographer.
                      </p>
                      <p>
                        Creative CV is a HTML resume template for professionals.
                        Built with Bootstrap 4, Now UI Kit and FontAwesome, this
                        modern and responsive design template is perfect to
                        showcase your portfolio, skills and experience.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">Basic Information</div>
                      <div className="row">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Age:</strong>
                        </div>
                        <div className="col-sm-8">24</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Email:</strong>
                        </div>
                        <div className="col-sm-8">anthony@company.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Subjects:</strong>
                        </div>
                        <div className="col-sm-8">Maths,Physics,Geography</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Rating</strong>
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
                            4&nbsp;
                          </small>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Language:</strong>
                        </div>
                        <div className="col-sm-8">English, German, French</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="table">
            <div className="container">
              <Table />
            </div>
          </div>
          <div className="section" id="experience">
            <div className="container cc-experience">
              <div className="h4 text-center mb-4 title">Work Experience</div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="card-body cc-experience-header">
                      <p>March 2016 - Present</p>
                      <div className="h5">CreativeM</div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Front End Developer</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="card-body cc-experience-header">
                      <p>April 2014 - March 2016</p>
                      <div className="h5">WebNote</div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Web Developer</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="card-body cc-experience-header">
                      <p>April 2013 - February 2014</p>
                      <div className="h5">WEBM</div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Intern</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container cc-education">
              <div className="h4 text-center mb-4 title">Education</div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 " data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>2013 - 2015</p>
                      <div className="h5">Master's Degree</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos-duration={500}>
                    <div className="card-body">
                      <div className="h5">Master of Information Technology</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>2009 - 2013</p>
                      <div className="h5">Bachelor's Degree</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos-duration={500}>
                    <div className="card-body">
                      <div className="h5">Bachelor of Computer Science</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>2007 - 2009</p>
                      <div className="h5">High School</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos-duration={500}>
                    <div className="card-body">
                      <div className="h5">Science and Mathematics</div>
                      <p className="category">School of Secondary board</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* <div className="section" id="skill">
            <div className="container">
              <div className="h4 text-center mb-4 title">
                Professional Skills
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">HTML</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          />
                          <span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">CSS</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          />
                          <span className="progress-value">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">JavaScript</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                          <span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">SASS</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                          <span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Bootstrap</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          />
                          <span className="progress-value">75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Photoshop</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            data-aos="progress-full"
                            data-aos-offset={10}
                            data-aos-duration={2000}
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          />
                          <span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="h4 text-center mb-4 title">Portfolio</div>
                  <div className="nav-align-center">
                    <ul
                      className="nav nav-pills nav-pills-primary"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#web-development"
                          role="tablist"
                        >
                          <i className="fa fa-laptop" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#graphic-design"
                          role="tablist"
                        >
                          <i className="fa fa-picture-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#Photography"
                          role="tablist"
                        >
                          <i className="fa fa-camera" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Recent Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-2.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Startup Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-3.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Food Order Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-4.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">
                                  Web Advertising Project
                                </div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="graphic-design" role="tabpanel">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-1.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Triangle Pattern</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-2.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Abstract Umbrella</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-3.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Cube Surface Texture</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-4.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Abstract Line</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Photography" role="tabpanel">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-3.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Wedding Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-2.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Beach Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-4.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Nature Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="section" id="reference">
            <div className="container cc-reference">
              <div className="h4 mb-4 text-center title">References</div>
              <div className="card">
                <div
                  className="carousel slide"
                  id="cc-Indicators"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#cc-Indicators"
                      data-slide-to={0}
                    />
                    <li data-target="#cc-Indicators" data-slide-to={1} />
                    <li data-target="#cc-Indicators" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-1.jpg" alt="Image" />
                          <div className="h5 pt-2">Aiyana</div>
                          <p className="category">CEO / WEBM</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {" "}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-2.jpg" alt="Image" />
                          <div className="h5 pt-2">Braiden</div>
                          <p className="category">CEO / Creativem</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {" "}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-3.jpg" alt="Image" />
                          <div className="h5 pt-2">Alexander</div>
                          <p className="category">CEO / Webnote</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {" "}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="container">
            {/* Home */}
            <div className="home" style={{ height: "300px" }}>
              {/* Home Slider */}
              <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                  {/* Slide */}
                  <div className="slide">
                    <div
                      className="background_image"
                      style={{ backgroundImage: "url(images/Tpic4.jpg)" }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center">
                              asdsd
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
                      style={{ backgroundImage: "url(images/Tpic5.jpg)" }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
})}
}
 
export default TP;
