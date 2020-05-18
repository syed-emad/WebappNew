import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../SearchResult/search2.css";
import FadeIn from "react-fade-in";
//wait
function search2() {
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

  return (
    <div>
      <div class="container">
        <FadeIn>
          <div className="row">
            <div className="columnxxx">
              <div className="card">
                <img
                  src="images/team2.jpg"
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <div className="containerfd">
                  <h9 className="h9">Jane Doe</h9>
                  <p className="title2">CEO &amp; Founder</p>
                  <p>
                    Some text that describes me lorem ipsum ipsum lorem.Some
                    text that describes me lorem ipsum ipsum lorem.
                  </p>
                  <p>
                    <button className="buttonx43">Contact</button>
                    <button className="buttonx43">Contact</button>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="columnxxx">
              <div className="card">
                <img
                  src="images/team2.jpg"
                  alt="Mike"
                  style={{ width: "100%" }}
                />
                <div className="containerfd">
                  <h9 className="h9">Jane Doe</h9>
                  <p className="title2">Art Director</p>
                  <p>
                    Some text that describes me lorem ipsum ipsum lorem.Some
                    text that describes me lorem ipsum ipsum lorem.
                  </p>

                  <p>
                    <button className="buttonx43">Contact</button>{" "}
                    <button className="buttonx43">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="columnxxx">
              <div className="card">
                <img
                  src="images/team2.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <div className="containerfd">
                  <h9 className="h9">Jane Doe</h9>
                  <p className="title2">Designer</p>
                  <p>
                    Some text that describes me lorem ipsum ipsum lorem.Some
                    text that describes me lorem ipsum ipsum lorem.
                  </p>
                  <p>
                    <button className="buttonx43">Contact</button>{" "}
                    <button className="buttonx43">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default search2;
