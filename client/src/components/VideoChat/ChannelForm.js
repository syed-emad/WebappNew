import React, { Component } from "react";
import "./style.css"


export default class ChannelForm extends Component {
  constructor(props) {
    super(props);
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
            >
              End Class
            </button>
          </div>
        </form>
      </div>
    );
  }
}
