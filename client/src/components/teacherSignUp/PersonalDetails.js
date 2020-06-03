import React, { Component } from 'react'
import Header from './Header';
export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                    <h1 style={{ fontFamily: "Montserrat",fontSize:"30px"}}>Personal Details (Step {this.props.step} of 5)</h1>
                    <br />
                    <div className="row"  >
                    <div className="wrap-input100 validate-input">
                    <label className="" style={{marginLeft:"25px"}}>
                       About You:
                        </label>
                    <textarea
                        className="form-control ml-2"
                        style={{paddingLeft:"35px",color:"#666666",alignItems:"center",borderRadius:"35px",fontSize:"15px",background:"#e6e6e6"}}
                        id="about"
                        name="about"
                        type="textarea"
                        rows="4"
                        placeholder="Tell us about yourself in no more than 150 words"
                        value={values.About}
                        onChange={handleChange('About')}
                        />
                    </div>
                    <br/>
                   <div className="col-md-4 ">
                   <div className="wrap-input100 validate-input">
                        <label className="ml-2">
                        Subjects:
                        </label>
                        <input 
                        className="input100x"
                        type="text" 
                        id="subjects" 
                        name="subjects"
                        placeholder="Major in subjects"
                        value={values.subjects}
                        onChange={handleChange('subjects')}
                        />     
                    </div>                  
                    </div>
                    <div className="col-md-4 ">
                   <div className="wrap-input100 validate-input">
                        <label className="ml-2">
                        Price:
                        </label>
                        <input 
                        className="input100x"
                        type="text" 
                        id="Price" 
                        name="Price"
                        placeholder="Price per class"
                        value={values.Price}
                        onChange={handleChange('Price')}
                        />     
                    </div>                  
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

export default PersonalDetails
