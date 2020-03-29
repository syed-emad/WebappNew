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
          <div className="clearfix">
        <div className=" container-login100-form-btn">
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
        <div className="container-login100-form-btn">
        <span className="float-right">  
        <button className="login100-form-btn float-right"onClick={this._next}>
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
        <React.Fragment>

        <div className="row" style={{ fontFamily: "Montserrat", marginLeft: "10px", marginTop:"20px" }}>
        <h1 >Teacher Sign-up</h1>
        </div>
        <p className="label100" style={{ fontSize:"30px", marginLeft: "10px", marginTop:"20px" }} >Step {this.state.currentStep} </p> 
        
        
         
          <div className="signup-box">
             
        <form 
        onSubmit={this.handleSubmit}
        className="form-group validate-form"
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
        
        
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
     
        <div className="form-group mb-10px">
            <h2 style={{ fontFamily: "Montserrat"}}>Basic Details</h2>
            <div className="row"  >
                <div className="col-md-6 ">
                    <div className="wrap-input100 validate-input">
                        <label className=" label100 ml-3" htmlFor="firstname">First name:</label>
                            <input
                            className="input100"
                            id="firstname"
                            name="firstname"
                            type="text"
                            placeholder="Enter first name"
                            value={props.firstname}
                            onChange={props.handleChange}
                            />
                    </div>
                    <div className="wrap-input100 validate-input">
                    <label className=" ml-3" htmlFor="email">Email:</label>
                            <input
                            className="input100"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={props.email}
                            onChange={props.handleChange}
                            />
                  </div>
                  <div className="wrap-input100 validate-input">
                  <label className=" ml-3" htmlFor="phone">Phone:</label>
                  <input
                        className="input100"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Enter phone"
                        value={props.phone}
                        onChange={props.handleChange}
                        />
                  </div>
                  <div className="wrap-input100 validate-input">
                  <label className=" ml-3" htmlFor="city">City:</label>
                        <input
                        className="input100"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter city"
                        value={props.city}
                        onChange={props.handleChange}
                        />
                 </div>
                </div>
                
                <div className="col-md-6 ">
                <div className="wrap-input100 validate-input">
                    <label className=" ml-3" htmlFor="lastname">Last name:</label>
                        <input
                        className="input100"
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Enter last name"
                        value={props.lastname}
                        onChange={props.handleChange}
                        />
                </div>
                <div className="wrap-input100 validate-input">
                <label className=" ml-3" htmlFor="password">Password:</label>
                        <input
                        className="input100"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={props.password}
                        onChange={props.handleChange}
                        />
                        
                </div>
                <div className="wrap-input100 validate-input">
                            <label className="ml-3">
                                Gender:
                            </label>
                            <div className="form-control border-0 p-0 pt-3">
                                <label className="mr-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        style={{ marginTop:"5px"}}
                                        onChange={props.handleChange}
                                    /> Male
                                </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    style={{marginLeft:"25px", marginTop:"5px"}}
                                    onChange={props.handleChange}
                                /> Female
                            </label>
                        </div>
                        
                </div>
                <div className="wrap-input100 validate-input">
                <label className=" ml-3 pt-4" htmlFor="zipCode" >Zip Code:</label>
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
                
            </div>
          </div>
         

      </div>
     
     
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
        <div className="form-group mb-10px">
        <h2 style={{ fontFamily: "Montserrat"}}>About You</h2>
        <div className="row"  >

            
        </div>
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
        <label htmlFor="bye">Bye</label>
            
      </div>
      <button className="btn btn-success btn-block" onSubmit={this.handleSubmit}>Sign up</button>
      </React.Fragment>
    );
  }

  export default test