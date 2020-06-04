import React, { Component } from 'react'
import ReactSelect from 'react-select';
import axios from "axios";
import ImageUpload from "./ImageUpload";

const levelList = [
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "matric/inter", label: "Matric/Intermediate" },
    { value: "olevels/alevels", label: "Olevels/Alevels" },
    { value: "univeristy", label: "University" },
  ];
  const daysList =[
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];
  
  
  const timeList=[
    { value: "morning", label: "Morning (8am-12pm)" },
    { value: "afternoon", label: "Afternoon (12pm-4pm)" },
    { value: "evening", label: "Evening (4pm-9pm)" },
    { value: "night", label: "Night (9pm-12am)" },
  ];

export class Try extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });   
    }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
       axios
      .post("/api/teachers", data)
      .then(() => {
        console.log("User Created");
        window.location = "/login-teacher";
      })
      .catch(err => {
        console.error(err);
      });
    
      }
     
      _next = () => {
        let currentStep = this.state.currentStep
        this.setState({
            currentStep : currentStep + 1
        })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      this.setState({
        currentStep: currentStep -1
      })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
          return (
              <div className="clearfix">
            <div className="container-login100-form-btn2">
            <span className="float-left">
            <button 
              className="login100-form-btn" 
              type="button" onClick={this._prev}>
            Previous
            </button>
            </span>
            </div>
            </div>
          )
        }
        return null;
      }
      
      nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3){
          return (
              <div className="clearfix">
            <div className="container-login100-form-btn2">
            <span className="float-right">  
            <button className="login100-form-btn" type="button" onClick={this._next}>
            Next
            </button>
            </span>
          </div>
            </div>       
          )
        }
        return null;
      }




    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Try
