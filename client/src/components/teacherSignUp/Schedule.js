import React, { Component, Fragment } from 'react'
import Header from './Header';
export class Schedule extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const { handleChange,addSchedule,deleteSchedule } = this.props;

        return (
           
               
            <div >
                <div className="container">
                <Header/>
                <div className="row" >
                <h1 >Teacher Sign-up</h1>
                </div>
                <br /><br /><br /><br />
                <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Schedule Details (Step {this.props.step} of 5)</h1>
                    <br />
                    <div>

                    {this.props.schedule.map((inp, index)=>

                    <div key={index}  className="row">
                    <div className="col-md-6 " >
                    <div className="wrap-input100 validate-input">
                    <label className=" ml-3" htmlFor="Day">Day:</label>
                        <input
                        className="input100x"
                        id="Day"
                        name="Day"
                        type="text"
                        placeholder="Enter day"
                        value={this.props.schedule[index].Day}
                        onChange={handleChange(index)}
                        />
                    </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="wrap-input100 validate-input">
                        
                    <label className=" ml-3" htmlFor="Time">Time Slot:</label>
                    <select
                            className="input100x"
                            style={{border:"transparent"}}
                            name="Time"
                            id="Time"
                            value={this.props.schedule[index].Time}
                            onChange={handleChange(index)}
                          >
                            <option value="">Choose time slot...</option>
                            <option value="12:00pm-3:00pm">12:00pm-3:00pm</option>
                            <option value="3:00pm-6:00pm">3:00pm-6:00pm</option>
                            <option value="6:00pm-9:00pm">6:00pm-9:00pm</option>
                            <option value="9:00pm-12:00am">9:00pm-12:00am</option>
                            <option value="12:00am-3:00am">12:00am-3:00am</option>
                            <option value="3:00pm-6:00am">3:00pm-6:00am</option>
                            <option value="6:00pm-9:00am">6:00pm-9:00am</option>
                            <option value="9:00am-12:00pm"> 9:00am-12:00pm</option>
                          </select>
                    </div>
                    
                    </div>
                    <div className="col-md-2">
                   
                    <div className="container-login100-form-btn" style={{paddingTop:"29px"}}>
                        
                    <button className="btn btn-danger"
                    style={{borderRadius:"20px", width:"120px",height:"40px", textTransform:"uppercase"}}
                    onClick={deleteSchedule(index)}              
                   >delete</button>
                    </div>
                  
                    </div>
                    </div>
                    
                    )}
                    <div className="container-login100-form-btn" >
                        <button></button>
                    <button className="btn btn-secondary"
                   style={{borderRadius:"20px", width:"120px",height:"40px", textTransform:"uppercase"}}
                  onClick={addSchedule}              
                  >
                   add</button>
                   </div>
                    <div className="container-login100-form-btn">
                    <button className="login100-form-btnx"
                  onClick={this.back}              
                  >
                   Back</button>
                  <button className="login100-form-btnx"
                  onClick={this.continue}              
                  >
                   Continue</button>
              
                </div>
               
                </div>
                </div>
                </div>
            </div>
                    )
    }
}

export default Schedule
