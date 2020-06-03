import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./search";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../Styling/styles/bootstrap-4.1.2/bootstrap.min.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../Styling/plugins/OwlCarousel2-2.3.4/animate.css";
import "../Styling/styles/main_styles.css";
import "../Styling/styles/responsive.css";
function SearchBar() {
  var name;
  const [searchedsubject, setName] = useState("");
  const [searchedprice, setPrice] = useState("");
  const [searchedtime, setTime] = useState("");
  const [searchedday, setDay] = useState("");

  //var url_string = window.location.href;
  //var url = new URL(url_string);
  //name = url.searchParams.get("name");
  //console.log("aaaa");
  //   console.log(name);
  const [value, setValue] = useState(null);

  async function handleButtonClick() {
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
  {
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
                            <option value="null">Hourly Prices</option>
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
                            <option value="Time">Time</option>
                            <option value="12:00pm-3:00pm">
                              12:00pm-3:00pm
                            </option>
                            <option value="3:00pm-6:00pm">3:00pm-6:00pm</option>
                            <option value="6:00pm-9:00pm">6:00pm-9:00pm</option>
                            <option value="9:00pm-12:00am">
                              9:00pm-12:00am
                            </option>
                            <option value="12:00am-3:00am">
                              12:00am-3:00am
                            </option>
                            <option value="3:00pm-6:00am">3:00pm-6:00am</option>
                            <option value="6:00pm-9:00am">6:00pm-9:00am</option>
                            <option value="9:00am-12:00pm">
                              9:00am-12:00pm
                            </option>
                          </select>
                          <select
                            className="search_input2"
                            name="cars"
                            onChange={(event) => setDay(event.target.value)}
                          >
                            <option value="Day">Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </select>
                          <Link
                            to={`/search?name=${searchedsubject}&price=${searchedprice}&time=${searchedtime}&day=${searchedday}`}
                          >
                            <button
                              className="search_button2"
                              onClick={handleButtonClick}
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
      </div>
    );
  }
}
export default SearchBar;
