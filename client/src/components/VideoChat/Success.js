import React from "react";
import "./Sucess.css";
import {Link} from 'react-router-dom';
import { getUser, removeUserSession } from "../../Utils/Common";
function Success(props) {
  const handleLogout = () => {
    removeUserSession();
    
  };
  {
    return (
      <div class="row" style={{ background: "#360f64" }}>
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <i className="fa fa-star"></i>
              </div>
              <h4 className="modal-title">Class Ended!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Hope you had a good experience
              </p>
            </div>
            <div className="modal-footer">
             <Link to ={`/`}>
              <button
                className="btn btn-success btn-block"
                data-dismiss="modal"
                style={{width:"100%"}}
                onClick={handleLogout}
              >
                Home
             
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Success;
