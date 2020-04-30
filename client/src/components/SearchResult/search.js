import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//wait
function Search() {
  const [searchedsubject, setName] = useState("");
  const [searchedprice, setPrice] = useState("");
  const [searchedtime, setTime] = useState("");
  const [searchedday, setDay] = useState("");

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

  async function getSomething2() {
    try {
      const response = await axios.get(
        `/api/teachers/search2?name=${searchedsubject}&price=${searchedprice}&time=${searchedtime}&day=${searchedday}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSomething();
  }, []);

  return (
    <div>
      <div className="home2">
        <div className="home_container2 col-xl-10 offset-xl-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 ">
                <div className="home_content text-center">
                  <div>
                    <form action="#" className="search_form" id="search_form">
                      <div
                        className="d-flex flex-sm-row "
                        style={{
                          padding: "50px",
                        }}
                      >
                        <input
                          onChange={(event) => setName(event.target.value)}
                          type="text"
                          name="name"
                          className="search_input2"
                          placeholder={name}
                          required="required"
                        />

                        <select
                          className="search_input2"
                          name="cars"
                          onChange={(event) => setPrice(event.target.value)}
                        >
                          <option value="">Hourly Prices</option>
                          <option value="250">250 RS</option>
                          <option value="500">500 RS</option>
                          <option value="750">750 RS</option>
                          <option value="1000">1000 RS</option>
                        </select>
                        <select
                          className="search_input2"
                          name="cars"
                          onChange={(event) => setTime(event.target.value)}
                        >
                          <option value="">Time</option>
                          <option value="12:00pm-3:00pm">12:00pm-3:00pm</option>
                          <option value="3:00pm-6:00pm">3:00pm-6:00pm</option>
                          <option value="6:00pm-9:00pm">6:00pm-9:00pm</option>
                          <option value="9:00pm-12:00am">9:00pm-12:00am</option>
                          <option value="12:00am-3:00am">12:00am-3:00am</option>
                          <option value="3:00pm-6:00am">3:00pm-6:00am</option>
                          <option value="6:00pm-9:00am">6:00pm-9:00am</option>
                          <option value="9:00am-12:00pm">9:00am-12:00pm</option>
                        </select>
                        <select
                          className="search_input2"
                          name="cars"
                          onChange={(event) => setDay(event.target.value)}
                        >
                          <option value="">Day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                        <Link>
                          <button
                            onClick={getSomething2}
                            className="search_button2"
                          >
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
      {value &&
        value.map((data) => {
          return (
            <div className="container -3">
              <div className="card">
                <div className="row ">
                  <div className="col-md-4">
                    <img src="images/blog_4.jpg" className="w-100" />
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-block px-3">
                      <h4 className="card-title" style={{ marginTop: "10px" }}>
                        <li>{data.name}</li>
                      </h4>
                      <p>
                        <i class="fa fa-book" style={{ color: "#360f64" }}>
                          &nbsp;&nbsp;
                        </i>
                        <small>{data.Qualification}&nbsp;</small>
                        &nbsp;&nbsp;
                        <i class="fa fa-book" style={{ color: "#360f64" }}>
                          &nbsp;&nbsp;
                        </i>
                        <small>{data.Qualification2}&nbsp;</small>
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
                          {data.Rating}&nbsp;
                        </small>
                        &nbsp;&nbsp;
                      </p>
                      <p className="card-text">
                        <small>{data.About} </small>
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
                        <a href="/Checkout" class="btn btn-primary">
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
          );
        })}
    </div>
  );
}
export default Search;