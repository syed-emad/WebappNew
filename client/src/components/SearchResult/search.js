import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { useHistory } from "react-router-dom";
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
      <FadeIn>
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
      </FadeIn>
      {value &&
        value.map((data) => {
          return (
            <div class="container">
              <FadeIn>
                <div className="columnxxx">
                  <div className="card">
                    <img
                      src="images/team2.jpg"
                      alt="Jane"
                      style={{ width: "100%" }}
                    />
                    <div className="containerfd">
                      <h9 className="h9">{data.name}</h9>
                      <p className="title2">
                        <i class="fa fa-book" style={{ color: "#360f64" }}>
                          &nbsp;&nbsp;
                        </i>
                        {data.Qualification} &amp; {data.Qualification2}
                      </p>
                      <p>{data.About}</p>
                      <div class=" ">
                        <Link to={`/TeachersProfile?id=${data._id}`}>
                          <button className="buttonx43">Book</button>
                        </Link>
                        <Link>
                          <button className="buttonx43">Message</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </FadeIn>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
