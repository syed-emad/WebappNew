import React, { Component } from 'react'
import Header from './Header';
export class Done extends Component {
   
    render() {
        const {Gotohome}=this.props;
        return (
            <div>
                <div className="container">
                    <Header/>
                    <div className="row" >
                    <h1 >Teacher Sign-up</h1>
                    </div>
                    <br /><br /><br /><br />
                    <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                    
                        <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>You've successfully completed your form!</h1>
                        <br/>
                        <div>
                            <div className="row" style={{margin:"2px"}}>
                               
                                <p style={{fontSize:"18px", color:"black"}}>Please wait for a confirmation email and then you can start tutoring</p>
                                <br/>
                                <p style={{fontSize:"18px", color:"black"}}>Thank you for applying. Have a good day!</p>
                            </div>
                            <div className="container-login100-form-btn">
                            <button className="login100-form-btnx"
                            type="submit" onClick={Gotohome}>Home</button>              
                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Done
