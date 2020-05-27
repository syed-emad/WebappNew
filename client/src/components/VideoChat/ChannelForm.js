import React, { Component } from "react";
import "./style.css"


export default class ChannelForm extends Component {
  constructor(props) {
    super(props);
var url_string = window.location.href;
var url = new URL(url_string);
var name = url.searchParams.get("name");
var id = url.searchParams.get("id");
var bookingid = url.searchParams.get("bookingid");
console.log(name);
console.log(id);
    this.state = {
      channel: ""
    };
  }

  onChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("Submiting ", this.state.channel);
    this.props.selectChannel(this.state.channel);
    this.setState({ channel: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="d-flex justify-content-start">
            <input
              placeholder="Enter Class ID"
              name="channel"
              value={this.state.channel}
              onChange={this.onChange}
              class="inpstyle"
            />
            <button
              class="newbutton4 "
              type="submit"
              value="Join Channel"
              style={{ color: "white" }}
            >
              Start Class
            </button>{" "}
            <button
              class="newbutton4 "
              type="submit"
              value="Join Channel"
              style={{ color: "white" }}
              // onClick={() => {
              //   endClass(data2._id);
              //  }}
            >
              End Class
            </button>
          </div>
        </form>
      </div>
    );
  }
}
