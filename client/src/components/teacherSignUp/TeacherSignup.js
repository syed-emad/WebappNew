import React, { Component } from 'react'
import axios from "axios";

export class TeacherSignup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          email: "",
          password: "",
    
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
    
        const { name, email, password, date } = this.state;
    
        const Teacher = {
          name,
          email,
          password,
          date
        };
    
        axios
          .post("/api/teachers", Teacher)
          .then(() => {
            console.log("Teacher Created");
            window.location = "/login";
          })
          .catch(err => {
            console.error(err);
          });
      };
        




    render() {
        return (
            <div>
                
            <div className="wrapper">
            <form
                onSubmit={this.handleSubmit}
                className="login100-form validate-form"
                id="wizard"
              >

              <section>
                <div className= "inner">
                <div className="image-holder">
							    <img src="images/form-wizard-1.jpg" alt=""/>
						    </div>
                <div className="form-content" >
                  <div className ="form-header">
								    <h3>Registration</h3>
							  </div>
                <p>Personal Information</p>
                
                <div className="form-row">
								<div className="form-holder">
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-holder">
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-holder">
                  <input
                    className="input100"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                  </div>
                  </div>
                  <button className="login100-form-btn">Register</button>
                  <a className="txt2" href="#nextteacherpage"></a>

                
                </div>
                </div>
              </section>
              </form>
            </div>
            </div>
        )
    }
}

export default TeacherSignup

