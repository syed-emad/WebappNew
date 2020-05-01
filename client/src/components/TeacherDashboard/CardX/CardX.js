import React from "react";

import "./Card.css";

function CardX() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-3">
        <div className="stati turquoise ">
          <i className="fa fa-user" />
          <div>
            <b>0</b>
            <span>.turquoise</span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stati turquoise left">
          <i className="icon-organization icons" />
          <div>
            <b>1</b>
            <span>.turquoise left</span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stati bg-turquoise ">
          <i className="icon-trophy icons" />
          <div>
            <b>2</b>
            <span style={{ color: "white" }}>bg-turquoise</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardX;
