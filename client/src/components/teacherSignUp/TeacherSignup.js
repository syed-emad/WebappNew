import React, { Component } from 'react'
import axios from "axios";

export class TeacherSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
          firstname: "",
          lastname:"",
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
    
          success: true
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

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
  };




  render() {
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
                <span className="login100-form-title">Basic Details</span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="First name is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    onChange={this.handleInputChange}
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Last name is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    onChange={this.handleInputChange}
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
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
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Gender is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    onChange={this.handleInputChange}
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="City is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.handleInputChange}
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Zip code is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    onChange={this.handleInputChange}
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Phone is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="phone"
                    onChange={this.handleInputChange}
                  />
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
    )
  }
}

export default TeacherSignup
