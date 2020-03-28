import React, { Component } from 'react'
import axios from "axios";
export class test extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        firstname: "",
          lastname:"",
          email: "",
          phone:"",
          password: "",
          gender:null,
          city:null,
          zipCode:"",
          // file:"",
          // about:"",
          // qualification:"",
    
          success: true
      }
    }
  
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });   
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const {firstname, lastname, email, password, gender,city,zipCode,phone, date } = this.state;

    const Teacher = {
      firstname,
      lastname,
      email,
      password,
      gender,
      city,
      zipCode,
      phone,
      // file,
      // about,
      // qualification,
      date
    };

    axios
      .post("/api/teachers", Teacher)
      .then(() => {
        console.log("User Created");
        window.location = "/login";
      })
      .catch(err => {
        console.error(err);
      });
    //   alert(`Your registration detail: \n 
    //          Email: ${email} \n 
    //          Username: ${username} \n
    //          Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <div className="container-login100-form-btn">
        <button 
          className="login100-form-btn" 
          type="button" onClick={this._prev}>
        Previous
        </button>
        </div>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <div className="container-login100-form-btn">
        <button className="login100-form-btn"onClick={this._next}>
        Next
        </button>
      </div>
               
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p> 
        
        <div className="limiter">
          <div className="container-login100">
        <form 
        onSubmit={this.handleSubmit}
        className="login100-form validate-form"
        >
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </div>
        </div>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
     
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
        <label htmlFor="firstname">First name</label>
        <input
          className="form-control"
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Enter first name"
          value={props.firstname}
          onChange={props.handleChange}
          />
                </div>
                <div className="col-md-6">
          <label htmlFor="lastname">Last name</label>
        <input
          className="form-control"
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Enter last name"
          value={props.lastname}
          onChange={props.handleChange}
          />
          </div>
          </div>
          <input
            className="input100"
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={props.email}
            onChange={props.handleChange}
                  />
        <input
          className="input100"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />
        <input
          className="input100"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter phone"
          value={props.phone}
          onChange={props.handleChange}
          />
        <input
          className="input100"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter phone"
          value={props.phone}
          onChange={props.handleChange}
          />
        <input
          className="input100"
          id="city"
          name="city"
          type="text"
          placeholder="Enter city"
          value={props.city}
          onChange={props.handleChange}
          />
          <input
          className="input100"
          id="gender"
          name="gender"
          type="text"
          placeholder="Enter gender"
          value={props.gender}
          onChange={props.handleChange}
          />
          <input
          className="input100"
          id="zipCode"
          name="zipCode"
          type="text"
          placeholder="Enter zip code"
          value={props.zipCode}
          onChange={props.handleChange}
          />

      </div>
     
     
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>
    );
  }

  export default test