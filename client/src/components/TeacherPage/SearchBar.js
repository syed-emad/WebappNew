import React, { Component } from "react";
import "../Styling/css/mainsearchbar.css";
import "../Styling/vendor/datepicker/daterangepicker.css";
export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="page-wrapper bg-color-1 p-t-395 p-b-120">
          <div className="wrapper wrapper--w1070">
            <div className="card card-7">
              <div className="card-body">
                <form className="form" method="POST" action="#">
                  <div className="input-group input--large">
                    <label className="label">going to</label>
                    <input
                      className="input--style-1"
                      type="text"
                      placeholder="Destination, hotel name"
                      name="going"
                    />
                  </div>
                  <div className="input-group input--medium">
                    <label className="label">Check-In</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="checkin"
                      placeholder="mm/dd/yyyy"
                      id="input-start"
                    />
                  </div>
                  <div className="input-group input--medium">
                    <label className="label">Check-Out</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="checkout"
                      placeholder="mm/dd/yyyy"
                      id="input-end"
                    />
                  </div>
                  <div className="input-group input--medium">
                    <label className="label">guests</label>
                    <div className="input-group-icon js-number-input">
                      <div className="icon-con">
                        <span className="plus">+</span>
                        <span className="minus">-</span>
                      </div>
                      <input
                        className="input--style-1 quantity"
                        type="text"
                        name="guests"
                        defaultValue="2 Guests"
                      />
                    </div>
                  </div>
                  <button className="btn-submit" type="submit">
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}