import React, { Component } from 'react'
import axios from "axios";

export class TeacherLogin extends Component {
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
                
            </div>
        )
    }
}

export default TeacherLogin

