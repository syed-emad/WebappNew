import React, { Component } from 'react'
import Header from './Header';
export class Done extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <div className="row" >
                    <h1 >Teacher Sign-up</h1>
                    </div>
                    <br /><br /><br /><br />
                    <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                        <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>All Done</h1>
                        <div>
                            <div className="row">
                                <br />
                                <h1>You've successfully completed your form!</h1>
                                <p>Please wait for a confirmation email and then you can start tutoring</p>
                                <p>Thank you for applying. Have a good day!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Done
