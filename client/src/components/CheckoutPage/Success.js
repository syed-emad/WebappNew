import React from "react";
import "./Sucess.css";
import Footer from "./Footer";
function Success(props) {
  const Gotohome = () => {
    props.history.push(`/`);
  };
  {
    return (
      <div class="row" style={{ background: "black", marginTop: "10px" }}>
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <i className="fa fa-star"></i>
              </div>
              <h4 className="modal-title">Awesome!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Your booking has been confirmed. Check your email for detials.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success btn-block"
                data-dismiss="modal"
                onClick={Gotohome}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Success;
