import React, { useEffect, useState } from "react";
import "./style.css"
<<<<<<< HEAD


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
=======
import axios from "axios";

function ChannelForm(props) {
   
     const [value, setValue] = useState(null);
     const [name, setName]= useState("");
     const [channel, setChannel]=useState("");
    var url_string = window.location.href;
    var url = new URL(url_string);
    var username = url.searchParams.get("username");
    var id = url.searchParams.get("id");
    var bookingid = url.searchParams.get("bookingid");
    var buttonid;
  
  
  function onSubmit(e) {
    e.preventDefault();
    console.log("Submiting ", channel);
    props.selectChannel(channel);
    setChannel({ channel: "" });
  };

  function endClass(id){ 
   buttonid=id;
   end();
   book();
    refreshPage();
  };

 async function end(){
    try {
      const response = await axios.put(
        `/api/teachers/end?id=${id}&buttonid=${buttonid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 async function book (){
    try {
      const response  = await axios.put(
        `/api/teachers/book?id=${id}&buttonid=${buttonid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 async function refreshPage() {
    window.location.reload(false);
  };


    return (
      <div>
        {value &&
        value.map((data) => {
          return (
        <form onSubmit={onSubmit}>
           {data.schedule &&
            data.schedule.map((data2) => {
            return (
>>>>>>> parent of 74eed3e... signup step form with backend
          <div class="d-flex justify-content-start">
         
            <input
              placeholder="Enter Class ID"
              name="channel"
              value={channel}
              onChange={(event) => setName(event.target.value)}
              class="inpstyle"
            />
            <button
              class="newbutton4 "
              type="submit"
              value="Join Channel"
              style={{ color: "white" }}
            >
              Start Class
            </button>
            <button
              class="newbutton4 "
              type="submit"
              value="Join Channel"
              style={{ color: "white" }}
            >
              End Class
            </button>
           
          </div>
<<<<<<< HEAD
=======
           );

          })}
>>>>>>> parent of 74eed3e... signup step form with backend
        </form>
      </div>
    );
 
}
export default ChannelForm;
