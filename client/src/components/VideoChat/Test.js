import React, { Component } from "react";
import "./style.css"
import axios from "axios"

export default class Test extends Component {
  constructor(props) {
    super(props);
    var url_string = window.location.href;
    var url = new URL(url_string);
    this.value="";
    this.id = url.searchParams.get("id");
    this.bookingid = url.searchParams.get("bookingid");
    this.buttonid="";

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

    endClass= id =>  { 
    this.buttonid=id;
    this.state.end();
    this.state.book();
    this.state.refreshPage();
   };
   
    end= async() => {
    try {
      const response = await axios.put(
        `/api/teachers/end?id=${this.id}&buttonid=${this.buttonid}`
      );
      this.setState(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    book = async()=>{
    try {
      const response  = await axios.put(
        `/api/teachers/book?id=${this.id}&buttonid=${this.buttonid}`
      );
      this.setState(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
};

    refreshPage = async() => {
    window.location.reload(false);
  };
  render() {
      const {endClass} =this.props;
    return (
      <div>
          {this.value &&
            this.value.map((data) => {
            return (
            <form onSubmit={this.onSubmit}>
                {data.schedule &&
                data.schedule.map((data2) => {
                return (
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
              onClick={() => {
                endClass(data2._id);
               }}
            >
              End Class
            </button>
          </div>
           )
        })}
        </form>
          )
        })}
      </div>
    );
  }
}
