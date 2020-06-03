import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
export class Success extends Component {
    constructor(props){
        super(props);
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    //   handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.handleForm();
     
        
    //   };
    render() {
        const {  handleForm,
            values: { name, email, password, About, subjects, age, Price},
            schedule, work, education
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
                <form onSubmit={handleForm} 
                className="">
                    <div className="row" style={{justifyContent:"space-between", paddingLeft:"35px"}}>
                    <div className="col-md- 6">
                        <label htmlFor="x"
                        style={{fontFamily:"Montserrat", fontSize:"20px"}}
                        >Basic details</label>
                        <p>
                            Full Name: {name}                  
                        </p>
                        <p>
                            Email: {email}
                        </p>
                        <p>
                            Password :{password} 
                        </p>
                        <p>
                            Age: {age}
                        </p>
                        <p>
                            About: {About}
                        </p>
                        <p>
                            Subjects to teach: {subjects}
                        </p>
                        <p>
                           Charges per class: {Price}
                        </p>
                        <br/>
                        <label htmlFor="x"
                        style={{fontFamily:"Montserrat", fontSize:"20px"}}
                        >Schedule details</label>
                        
                        {schedule.map((inp, index)=>
                        <div key={index} >
                        <label
                        style={{fontFamily:"Montserrat", fontSize:"15px"}}
                        >{` Slot# ${index+1}`}</label>
                        <p>
                            Day: {schedule[index].Day}
                        </p>
                        <p>
                            Time: {schedule[index].Time}
                        </p>
                        <br/>
                        </div>
                        
                        )}
                        
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="x"
                            style={{fontFamily:"Montserrat", fontSize:"20px"}}
                            >Education details</label>
                            {education.map((inp, index)=>
                                <div key={index} >
                                <label
                                style={{fontFamily:"Montserrat", fontSize:"15px"}}
                                >{` Degree# ${index+1}`}</label>
                                <p>
                                    Degree: {education[index].level}
                                </p>
                                <p>
                                    Institute: {education[index].institute}
                                </p>
                                <p>
                                    Start date: {education[index].start} End date: {education[index].end}
                                </p>
                                <p>
                                    Field of Study: {education[index].field}
                                </p>
                                <br/>
                                </div>
                                

                            )}
                            <br/>
                            <label htmlFor="x"
                            style={{fontFamily:"Montserrat", fontSize:"20px"}}
                            >Work details</label>
                            {work.map((inp, index)=>
                                <div key={index} >
                                <label
                                style={{fontFamily:"Montserrat", fontSize:"15px"}}
                                >{` Work# ${index+1}`}</label>
                                <p>
                                    Degree: {work[index].title}
                                </p>
                                <p>
                                    Institute: {work[index].place}
                                </p>
                                <p>
                                    Start date: {work[index].startDate} End date: {education[index].endDate}
                                </p>
                                <p>
                                    Field of Study: {work[index].details}
                                </p>
                                <br/>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btnx"
                        onClick={this.back}              
                        >
                        Back</button>
                        <button className="login100-form-btnx"
                        onClick={this.continue}   type="submit"        
                         >
                        Save and Continue</button>              
                        </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Success
