import React, { Component } from 'react'
import Header from './Header';
export class Education extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    render() {
        const { handleChange,addEducation,deleteEducation} = this.props;
        return (
            <div>
                 <div className="container">
                     <Header/>
                     <div className="row" >
                        <h1 >Teacher Sign-up</h1>
                        </div>
                        <br /><br /><br /><br />
                        <div className="form-group mb-10px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                        <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Education Details (Step {this.props.step} of 5)</h1>
                            <br />
                            <div>
                            {this.props.education.map((inp, index)=>

                            <div key={index}  className="row">

                            <div className="col-md-5 " >
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="level">Degree:</label>
                                {/* <input
                                className="input100x"
                                id="level"
                                name="level"
                                type="text"
                                placeholder="Enter your level of education"
                                value={this.props.education[index].level}
                                onChange={handleChange(index)}
                                /> */}
                                <select
                                className="input100x"
                                style={{border:"transparent"}}
                                name="level"
                                id="level"
                                value={this.props.education[index].level}
                                onChange={handleChange(index)}
                                >
                                <option value="">Choose degree...</option>
                                <option value="High School">High School</option>
                                <option value="Matric">Matric</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Olevels">Olevels</option>
                                <option value="Alevels">Alevels</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                                <option value="PhD">PhD</option>
                                </select>
                            </div>
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="start">Start Date:</label>
                                <input
                                className="input100x"
                                id="start"
                                name="start"
                                type="text"
                                placeholder="Enter starting date (e.g. 17 Jun 2019)"
                                value={this.props.education[index].start}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            <div className="col-md-5 " >
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="institute">Institute name:</label>
                                <input
                                className="input100x"
                                id="institute"
                                name="institute"
                                type="text"
                                placeholder="Enter institute name"
                                value={this.props.education[index].institute}
                                onChange={handleChange(index)}
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="end">End Date:</label>
                                <input
                                className="input100x"
                                id="end"
                                name="end"
                                type="text"
                                placeholder="Enter completion date (e.g. 17 Jun 2019)"
                                value={this.props.education[index].end}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            <div className="col-md-10" style={{paddingLeft:"7px"}}>
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="field">Field of study:</label>
                                <input
                                className="input100x"
                                id="field"
                                name="field"
                                type="text"
                                placeholder="Enter field of study (e.g Engineering, Medical etc)"
                                value={this.props.education[index].field}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            <div className="col-md-2">
                   
                            <div className="container-login100-form-btn" style={{paddingTop:"125px"}}>
                            <button></button>
                            <button className="btn btn-danger"
                            style={{borderRadius:"20px", width:"120px",height:"40px", textTransform:"uppercase"}}
                            onClick={deleteEducation(index)}              
                            >delete</button>
                            </div>
                            
                            </div>
                            </div>

                            )}
                              <div className="container-login100-form-btn">
                        <button></button>
                        <button className="btn btn-secondary"
                        style={{borderRadius:"20px", width:"120px",height:"40px", textTransform:"uppercase"}}
                        onClick={addEducation}              
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

export default Education
