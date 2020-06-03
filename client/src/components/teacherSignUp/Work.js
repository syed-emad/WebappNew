import React, { Component } from 'react'
import Header from './Header';
export class Work extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    render() {
        const { handleChange,addWork,deleteWork } = this.props;
        return (
            <div>
                <div className="container">
                    <Header/>
                    <div className="row" >
                    <h1 >Teacher Sign-up</h1>
                    </div>
                    <br /><br /><br /><br />
                    <div className="form-group mx-50px" style={{padding:"40px",border: "2px solid lightgrey", height:"", marginLeft:"100px",marginRight:"100px"}}>
                    <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Work Details (Step {this.props.step} of 5)</h1>
                    <br />
                    <div>

                    {this.props.work.map((inp, index)=>

                        <div key={index}  className="row">

                            <div className="col-md-5 " >
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="title">Title:</label>
                                <input
                                className="input100x"
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter your title of job"
                                value={this.props.work[index].title}
                                onChange={handleChange(index)}
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="startDate">Start Date:</label>
                                <input
                                className="input100x"
                                id="startDate"
                                name="startDate"
                                type="text"
                                placeholder="Enter start date of job (e.g. 17 Jun 2019)"
                                value={this.props.work[index].startDate}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            <div className="col-md-5 " >
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="place">Place:</label>
                                <input
                                className="input100x"
                                id="place"
                                name="place"
                                type="text"
                                placeholder="Enter place of work (e.g. IBA/ xyz school)"
                                value={this.props.work[index].place}
                                onChange={handleChange(index)}
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                            <label className=" ml-3" htmlFor="endDate">End Date:</label>
                                <input
                                className="input100x"
                                id="endDate"
                                name="endDate"
                                type="text"
                                placeholder="Enter end date of job (e.g. 17 Jun 2019)"
                                value={this.props.work[index].endDate}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            <div className="col-md-10" style={{paddingLeft:"7px"}}>
                            <div className="wrap-input100 validate-input">
                            <label className="ml-3"style={{paddingLeft:"7px"}}>
                                Details:
                            </label>
                            <textarea
                                className="form-control ml-2"
                                style={{paddingLeft:"35px",color:"#666666",alignItems:"center",borderRadius:"35px",fontSize:"15px",background:"#e6e6e6"}}
                                id="details"
                                name="details"
                                type="textarea"
                                rows="4"
                                placeholder="Give details about the job..."
                                value={this.props.work[index].details}
                                onChange={handleChange(index)}
                                />
                            </div>
                            </div>
                            
                            <div className="col-md-2">
                   
                            <div className="container-login100-form-btn" style={{paddingTop:"190px"}}>
                            <button></button>
                            <button className="btn btn-danger"
                            style={{borderRadius:"20px", width:"120px",height:"40px", textTransform:"uppercase"}}
                            onClick={deleteWork(index)}              
                            >delete</button>
                            </div>
                            
                            </div>
                            
                        </div>




                    )}
                    <div className="container-login100-form-btn">
                        <button></button>
                        <button className="btn btn-secondary"
                        style={{borderRadius:"25px", width:"120px",height:"40px", textTransform:"uppercase"}}
                        onClick={addWork}              
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

export default Work
