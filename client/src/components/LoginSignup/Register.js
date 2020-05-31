import React, { Component } from "react";
import axios from "axios";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class RegisterNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {
        name: '',
        email: '',
        password: '',
      },
      success: true
    };
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  };
  handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, date } = this.state;

    if(validateForm(this.state.errors)) {
      console.log('Valid Form');
      const User = {
        name,
        email,
        password,
        date
      };
  
      axios
        .post("/api/users", User)
        .then(() => {
          console.log("User Created");
          window.location = "/login";
        })
        .catch(err => {
          console.error(err);
        });


    }else{
      console.log('Invalid Form')
    }
    
  };
  render() {
    const {errors} = this.state;
    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
              </div>
              <form
                onSubmit={this.handleSubmit}
                className="login100-form validate-form"
              >
                <span className="login100-form-title">Member Register</span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                  />
                  
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                  {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                  {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Register</button>
                </div>
                <div className="text-center p-t-136">
                  <a className="txt2" href="\login">
                    Already Have A Account?Login.{" "}
                    <i
                      className="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="text-center p-t-136"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
