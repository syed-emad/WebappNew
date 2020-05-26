import React, { Component } from "react";
import ChannelForm from "./ChannelForm";
import Call from "./Call";
import "./style.css"
import Header from "./Header";
const { If, Then, Else } = require("react-if");
class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  var url_string = window.location.href;
  var url = new URL(url_string);
  this.name = url.searchParams.get("username");
 
 
  }



 
  selectChannel = channel => {
    this.setState({ channel });
  };

  render() { 
    return (
      <div>
        <div>
          <header className="headervideo">
            {" "}
            <div class="headervideo_content d-flex flex-row align-items-center justify-content-start">
              <div className=" mr-auto p-2">
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
              </div>{" "}
              <div className=" mr-auto">
                <ChannelForm selectChannel={this.selectChannel} />
              </div>
              <div className=" p-2">
                <div class="pull-right">
                  {" "}
                  <img
                    src="images/team2.jpg"
                    alt="Avatar"
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                  />{" "}
                  <a style={{ marginLeft: "5px", color: "white" }}>
                    {" "}
                    Welcome {this.name}!
                  </a>
                </div>
              </div>
            </div>
          </header>{" "}
          <br />
          <br />
          <br /> <br /> <br /> <br />
        </div>

        <div class="videobox2">
          <div class="row">
            <div class="col-8" style={{ borderColor: "pink", height: "100%" }}>
              <Call channel={this.state.channel} />
            </div>
            <div class="col-4" style={{ borderColor: "pink", height: "100%" }}>
              Messenger
            </div>
          </div>
        </div>
      </div>
    );
}}
export default Style;
