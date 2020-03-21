import React, { Component } from 'react'
import axios from "axios";
import ReactSelect from 'react-select';

export class TeacherSignup extends Component {
    constructor() {
        super();
        this.state = {
       form: {
          firstname: "",
          // lastname:"",
          email: "",
          phone:"",
          password: "",
          confirmPassword: "",
          gender:null,
          city:null,
          zipCode:"",
          

          // file:"",
          // about:"",
          // qualification:"",
    
          // success: true
        },
      formErrors: {
        firstname: null,
        email: null,
        phone: null,
        password: null,
        confirmPassword: null,
        gender: null,
        city: null
      }
      
    };
    this.cityList = [
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "multan", label: "Multan" },
      { value: "peshawar", label: "Peshawar" },
      { value: "quetta", label: "Quetta" }
    ];
    
  }
  validateNumber = evt => {
    var theEvent = evt || window.event;
 
    // Handle paste
    if (theEvent.type === "paste") {
      key = theEvent.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

      handleInputChange = e => {
        const { name, value, checked } = e.target;
        const { form, formErrors } = this.state;
        let formObj = {};
        this.setState({form: formObj }, () => {
          
          if (!Object.keys(formErrors).includes(name)) return;
          let formErrorsObj = {};
          if (name === "password" || name === "confirmPassword") {
            let refValue = this.state.form[
              name === "password" ? "confirmPassword" : "password"
            ];
            const errorMsg = this.validateField(name, value, refValue);
            formErrorsObj = { ...formErrors, [name]: errorMsg };
            if (!errorMsg && refValue) {
              formErrorsObj.confirmPassword = null;
              formErrorsObj.password = null;
            }
          } else {
            const errorMsg = this.validateField(
             name,
              name === "language" ? this.state.form["language"] : value
            );
            formErrorsObj = { ...formErrors, [name]: errorMsg };
          }
          this.setState({ formErrors: formErrorsObj });
          
          // [e.target.name]: e.target.value
        });
      };

      validateField = (name, value, refValue) => {
        let errorMsg = null;
        switch (name) {
          case "firstname":
            if (!value) errorMsg = "Please enter Name.";
            break;
          case "email":
            if (!value) errorMsg = "Please enter Email.";
            else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
              errorMsg = "Please enter valid Email.";
            break;
          // case "phone":
          //   if (!value) errorMsg = "Please enter Phone.";
          //   break;
          case "city":
            if (!value) errorMsg = "Please select City.";
            break;
          case "gender":
            if (!value) errorMsg = "Please select Gender.";
            break;
          case "password":
            // refValue is the value of Confirm Password field
            if (!value) errorMsg = "Please enter Password.";
            else if (refValue && value !== refValue)
              errorMsg = "Password and Confirm Password does not match.";
            break;
          case "confirmPassword":
            // refValue is the value of Password field
            if (!value) errorMsg = "Please enter Confirm Password.";
            else if (refValue && value !== refValue)
              errorMsg = "Password and Confirm Password does not match.";
            break;
          
          default:
            break;
        }
        return errorMsg;
      };
     
      validateForm = (form, formErrors, validateFunc) => {
        const errorObj = {};
        Object.keys(formErrors).map(x => {
          let refValue = null;
          if (x === "password" || x === "confirmPassword") {
            refValue = form[x === "password" ? "confirmPassword" : "password"];
          }
          const msg = validateFunc(x, form[x], refValue);
          if (msg) errorObj[x] = msg;
        });
        return errorObj;
      };

      handleSubmit = e => {
        // e.preventDefault();
    
        // const { name, email, password, gender,city,zipCode,phone,file,about,qualification, date } = this.state;
    
        // const Teacher = {
        //   name,
        //   email,
        //   password,
        //   gender,
        //   city,
        //   zipCode,
        //   phone,
        //   file,
        //   about,
        //   qualification,
        //   date
        // };
        
        const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log('Data: ', form);
    
        // axios
        //   .post("/api/teachers", form)
        //   .then(() => {
        //     console.log("Teacher Created");
        //     window.location = "/login";
        //   })
        //   .catch(err => {
        //     console.error(err);
        //   });


      };
    
      render() {
        const { form, formErrors } = this.state;
        return (
          <div className="signup-box">
            <p className="title">Sign up</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Name:<span className="asterisk">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputChange}
                  />
                  {formErrors.name && <span className="err">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label>
                    Email:<span className="asterisk">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputChange}
                  />
                  {formErrors.email && <span className="err">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label>
                    Password:<span className="asterisk">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputChange}
                  />
                  {formErrors.password && <span className="err">{formErrors.password}</span>}
                </div>
                <div className="form-group">
                  <label>
                    Confirm Password:<span className="asterisk">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputChange}
                  />
                  {formErrors.confirmPassword && <span className="err">{formErrors.confirmPassword}</span>}
                </div>
                {/* <div className="form-group">
                  <label className="mr-3">
                    Language:<span className="asterisk">*</span>
                  </label>
                  <div className="form-control border-0 p-0 pt-1">
                    {this.languageList.map((x, i) => {
                      return (
                        <label key={i} className="mr-2">
                          <input
                            type="checkbox"
                            name="language"
                            value={x.value}
                            checked={form.language.includes(x.value)}
                            onChange={this.handleInputChange}
                          /> {x.label}
                        </label>
                      );
                    })}
                  </div>
                  {formErrors.language && <span className="err">{formErrors.language}</span>}
                </div> */}
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Phone:<span>Optional</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputChange}
                    onKeyPress={this.validateNumber}
                  />
                  {formErrors.phone && <span className="err">{formErrors.phone}</span>}
                </div>
                <div className="form-group">
                  <label className="mr-3">
                    Gender:<span className="asterisk">*</span>
                  </label>
                  <div className="form-control border-0 p-0 pt-1">
                    <label className="mr-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={form.gender === "male"}
                        onChange={this.handleInputChange}
                      /> Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={form.gender === "female"}
                        onChange={this.handleInputChange}
                      /> Female
                    </label>
                  </div>
                  {formErrors.gender && <span className="err">{formErrors.gender}</span>}
                </div>
                <div className="form-group">
                  <label>Zip Code:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>
                    City:<span className="asterisk">*</span>
                  </label>
                  <ReactSelect
                    name="city"
                    options={this.cityList}
                    value={this.cityList.find(x => x.value === form.city)}
                    onChange={e =>
                      this.handleInputChange({
                        target: {
                          name: "city",
                          value: e.value
                        }
                      })
                    }
                  />
                  {formErrors.city && <span className="err">{formErrors.city}</span>}
                </div>
              </div>
            </div>
     
            <div className="form-group">
              <input
                type="button"
                className="btn btn-primary"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        );
      }
}

export default TeacherSignup;

