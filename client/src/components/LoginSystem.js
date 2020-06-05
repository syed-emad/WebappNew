import React, { Component } from "react";
import axios from "axios";
class LoginSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      date: "",
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
        window.location = "/2";
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="date"
                placeholder="date"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginSystem;