import React, { Component } from 'react'
import { Header } from 'admin-bro';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const {
            values: { firstName, lastName, email, password, occupation, About, subjects, age }
          }
           = this.props;
        return (
            <div>
                <div className="container">
                <Header/>
                <div className="row" >
                <h1 >Teacher Sign-up</h1>
                </div>
                <br /><br /><br /><br />
                <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Confirm Details</h1>
                    <br />

                </div>
                </div>
            </div>
        )
    }
}

export default Success
