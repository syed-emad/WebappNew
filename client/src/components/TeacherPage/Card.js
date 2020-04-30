import React, { Component } from "react";
import "../Styling/CardStyle.css";
import axios from "axios";
export default class Card extends Component {
  state = {
    teachers: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  //Getting TEACHERS from DB
  componentDidMount() {
    axios.get(`/api/teachers/`).then((res) => {
      const teachers = res.data;
      this.setState({ teachers });
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>---------THESE ARE FROM DATABASE---------</p>{" "}
          <ul>
            {this.state.teachers.map((teachers) => (
              <div className="container py-3">
                <div className="card">
                  <div className="row ">
                    <div className="col-md-4">
                      <img src="images/blog_4.jpg" className="w-100" />
                    </div>
                    <div className="col-md-8 px-3">
                      <div className="card-block px-3">
                        <h4
                          className="card-title"
                          style={{ marginTop: "10px" }}
                        >
                          <li>{teachers.name}</li>
                        </h4>
                        <p>
                          <i class="fa fa-book" style={{ color: "#360f64" }}>
                            &nbsp;&nbsp;
                          </i>
                          <small>{teachers.Qualification}&nbsp;</small>
                          &nbsp;&nbsp;
                          <i class="fa fa-book" style={{ color: "#360f64" }}>
                            &nbsp;&nbsp;
                          </i>
                          <small>{teachers.Qualification2}&nbsp;</small>
                          &nbsp;&nbsp;{" "}
                          <i
                            class="fa fa-star"
                            style={{
                              fontSize: "20px",
                              color: "#FFF533",
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
                            {teachers.Rating}&nbsp;
                          </small>
                          &nbsp;&nbsp;
                        </p>
                        <p className="card-text">
                          <small>{teachers.About} </small>
                        </p>
                        <p className="card-text">
                          <h4
                            className="card-title"
                            style={{ marginTop: "10px" }}
                          >
                            <i
                              class="fa fa-clock-o"
                              style={{ color: "#360f64" }}
                            ></i>{" "}
                            Timings{" "}
                          </h4>
                          <ul style={{ padding: "-100px", marginTop: "10px" }}>
                            <li>Monday:2-4 PM | Tuesday:2PM-4PM</li>
                            <li>Wednesday:2:M-4:PM | Thursday:2PM-4:PM</li>
                            <li>
                              Friday:2PM-4PM | Saturday:2PM-4PM | Sunday:2pm-4pm
                            </li>
                          </ul>
                        </p>

                        <div class="text-right mb-3">
                          <a href="#" class="btn btn-primary">
                            Book Lesson
                          </a>
                          &nbsp;
                          <a href="#" class="btn btn-primary">
                            Messege
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}