import React, { useEffect, useState } from "react";
import axios from "axios";
//wait
function Search() {
  // let { name } = useParams();\var name
  var name;

  var url_string = window.location.href;
  var url = new URL(url_string);
  name = url.searchParams.get("name");
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
  return (
    <div>
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
          );
        })}
    </div>
  );
}

export default Search;
