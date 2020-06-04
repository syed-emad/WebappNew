import React, { Component,useState, useContext, useCallback } from 'react'
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
export class TeacherSignup extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        roleID: "2",
        firstname: "",
          lastname:"",
          email: "",
          phone:"",
          password: "",
          gender:null,
          city:null,
          zipCode:"",
          profileImage:null,
          about:"",
          qualification:null,
          subjects:"",
          level:null,
          days:"",
          time:"",
          success: true
      }
      
    }
  
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });   
    }
    uploadImage = e => {
      this.setState(
        {
          // profileImage: e.target.files[0]
        },
        () => 
        console.log(this.state.profileImage)
      );
      console.log('neha');
    };

    handleSubmit = event => {
      event.preventDefault()
      // const {roleID,firstname, lastname, email, password, gender,city,zipCode,phone,profileImage,qualification,about,subjects,level,days,time, date } = this.state;

    // const Teacher = {
    //   roleID,
    //   firstname,
    //   lastname,
    //   email,
    //   password,
    //   gender,
    //   city,
    //   zipCode,
    //   phone,
    //   profileImage,
    //   about,
    //   qualification,
    //   subjects,
    //   level,
    //   days,
    //   time,
    //   date
    // };
    const formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('firstname', this.state.firstname);
    formData.append('lastname', this.state.lastname);
    formData.append('password', this.state.password);
    formData.append('gender', this.state.gender);
    formData.append('phone', this.state.phone);
    formData.append('city', this.state.city);
    formData.append('zipCode',this.state.zipCode);
    formData.append('profileImage', this.state.profileImage);
    formData.append('about', this.state.about);
    formData.append('qualification',this.state.qualification);
    formData.append('subjects', this.state.subjects);
    formData.append('level', this.state.level);
    formData.append('days',this.state.days);
    formData.append('time', this.state.time);
    
    console.log('neha2');
    console.log(formData);
    axios
      .post("/api/teachers", formData)
      .then(() => {
        console.log("User Created");
        window.location = "/TeacherLogin";
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
  
  /*
  * the functions for our button
  */
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
        <React.Fragment>
         {/* <div className="background_image"
                        style={{ backgroundImage: "url(images/bg.jpg)" }}
                      /> */}
        <div className="container2"
        
        >
         
        <div className="row" style={{ fontFamily: "Montserrat", marginLeft: "10px", marginTop:"20px" }}>
        <h1 >Teacher Sign-up</h1>
        </div>
        <p className="label100" style={{ fontSize:"30px", marginLeft: "10px", marginTop:"20px" }} >Step {this.state.currentStep} </p> 
                 
         <div className="signup-box"         
          >
             
        <form 
        onSubmit={this.handleSubmit}
        className="form-group validate-form"
        // enctype="multipart/form-data"
        >
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            password={this.state.password}
            gender={this.state.gender}
            city={this.state.city}
            zipCode={this.state.zipCode}
            phone={this.state.phone}
            
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            onInput={this.uploadImage}
            about={this.state.about}
            qualification={this.state.qualification}
            profileImage={this.state.profileImage}
            subjects={this.state.subjects}
            level={this.state.level}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            days={this.state.days}
            time={this.state.time}
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
        <div className="form-group mb-10px ">
        <h2 style={{ fontFamily: "Montserrat"}}>About You</h2>
        
        <div className="row"  >
                      
                        <textarea
                        className="form-control m-4"
                        id="about"
                        name="about"
                        type="textarea"
                        rows="5"
                        placeholder="Tell us about yourself in no more than 150 words"
                        value={props.about}
                        onChange={props.handleChange}
                        />
                        
                        <label className="ml-3">
                        Qualification:
                        </label>
                        <input 
                        className="form-control m-3"
                        type="text" 
                        id="qualification" 
                        name="qualification"
                        placeholder="Qualification"
                        value={props.qualification}
                        onChange={props.handleChange}
                        />
                        
                         <ImageUpload name="profileImage" center id="profileImage"  />
                         {/* <div >
                         <label className="ml-2">
                       Pick image
                        </label>
                          <input
                           name="profileImage"
                          
                                style={{ display: 'none' }}
                                type="file"
                                accept=".jpg,.png,.jpeg"
                                onChange={props.onChangeHandler}
                              /> 
                              
                                <button type="button" className="login100-form-btn" onClick={props.handleSubmit}>
                                  
                                </button>
                              
                              
                            </div> */}

                        <div className="col">
                        <label className="ml-2">
                        Subjects:
                        </label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="subjects" 
                        name="subjects"
                        placeholder="Subjects"
                        value={props.subjects}
                        onChange={props.handleChange}
                        />
                        
                        </div>

                        <div className="col">
                        <div className="form-group">
                        <label>
                          Level:
                        </label>
                        <ReactSelect
                        name="level"
                        isMulti
                        options={levelList}
                        value={props.level}
                        onChange={e =>
                          props.handleChange({
                            target: {
                              name: "level",
                              value: e.value
                            }
                          })
                        }
                      />
              
            </div>                      
        </div>

                                                
                        

        </div>
      </div>
    );  
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      
      <div className="form-group mb-10px ">
        <h2 style={{ fontFamily: "Montserrat"}}>Choose your timetable</h2>
        <label className="mb-3" >Select days and time that you prefer to teach</label>
        <div className="row"  >
            
        <div className="col">
          <div className="form-group">
            <label>
               Days:
            </label>
            <ReactSelect
                name="days"
                isMulti
                options={daysList}
                value={props.days}
                onChange={e =>
                props.handleChange({
                target: {
                name: "days",
                value: e.value
               }
              })
              }
            />          
        </div>
      </div>  

      <div className="col">
          <div className="form-group">
            <label>
               Time:
            </label>
            <ReactSelect
                name="time"
                isMulti
                options={timeList}
                value={props.time}
                onChange={e =>
                props.handleChange({
                target: {
                name: "time",
                value: e.value
               }
              })
              }
            />          
        </div>
      </div>  

      </div>
      <button className="login100-form-btn" onSubmit={props.handleSubmit}>Sign up</button>
      </div>
      
      
      
      
    );
  }

  export default TeacherSignup