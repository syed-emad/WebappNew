import React, { Component } from 'react';
 
 
import Header from './Header';
export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
     
      <div className="container">
      <Header/>
        <div className="row" >
        <h1 >Teacher Sign-up</h1>
        </div>
          
    <br /><br /><br /><br />
     <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
            <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Basic Details (Step {this.props.step} of 5)</h1>
            <br />
            <div className="row"  >
                <div className="col-md-12">
                    <div className="wrap-input100 validate-input">
                              <label className=" label100 ml-3" htmlFor="name">Full name:</label>
                                  <input
                                  className="input100x"
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="Enter your full name (e.g John Doe)"
                                  value={values.name}
                                  onChange={handleChange('name')}
                                  />
                      </div>
                </div>
                <div className="col-md-6 ">  
                    <div className="wrap-input100 validate-input">
                    <label className=" ml-3" htmlFor="email">Email:</label>
                            <input
                            className="input100x"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleChange('email')}
                            />
                  </div>
                  
                  <div className="wrap-input100 validate-input">
                  <label className=" ml-3" htmlFor="age">Age:</label>
                        <input
                        className="input100x"
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Enter your age"
                        value={values.age}
                        onChange={handleChange('age')}
                        />
                 </div>
                </div>
                
                <div className="col-md-6 ">
                {/* <div className="wrap-input100 validate-input">
                    <label className=" ml-3" htmlFor="lastname">Last name:</label>
                        <input
                        className="input100x"
                        id="lastname"
                        name="lastName"
                        type="text"
                        placeholder="Enter last name"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        />
                </div> */}
                <div className="wrap-input100 validate-input">
                <label className=" ml-3" htmlFor="password">Password:</label>
                        <input
                        className="input100x"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange('password')}
                        />
                        
                </div>
                <div className="wrap-input100 validate-input">
                <label className=" ml-3" htmlFor="City">City:</label>
                        <input
                        className="input100x"
                        id="City"
                        name="City"
                        type="City"
                        placeholder="Enter your city"
                        value={values.City}
                        onChange={handleChange('City')}
                        />
                        
                </div>
               
               
                
            </div>
            <div className="container-login100-form-btn">
                  <button></button>
                  <button className="login100-form-btnx"
                  onClick={this.continue}
                  >
                   Continue</button>
                </div>
          
              {/* <button className="login100-form-btnx " 
              type="button"
              style={{padding:"20px", marginLeft:"840px",marginTop:"20px"}}
              onClick={this.continue}
            >Continue</button> */}
       </div>
      </div>
      </div>
      </div>
    );
  }
}

export default UserDetails;