import React from "react";
import "./Checkout.css";
function CheckoutCard(props) {
  {
    return (
      <div className="row">
        <div className="col-75">
          <div className="containerxyzz">
            <form action="/Success">
              <div className="row">
                <div className="col-50">
                  <br></br>
                  <h3>Payment Details</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                    <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    />
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    />
                  </div>
                  <label htmlFor="cname">Name</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    style={{
                      width: "100%",
                      marginbottom: "20px",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderradius: "3px",
                    }}
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    style={{
                      width: "100%",
                      marginbottom: "20px",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderradius: "3px",
                    }}
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    style={{
                      width: "100%",
                      marginbottom: "20px",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderradius: "3px",
                    }}
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2025}
                        style={{
                          width: "100%",
                          marginbottom: "20px",
                          padding: "12px",
                          border: "1px solid #ccc",
                          borderradius: "3px",
                        }}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                        style={{
                          width: "100%",
                          marginbottom: "20px",
                          padding: "12px",
                          border: "1px solid #ccc",
                          borderradius: "3px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br></br>

              <button
                className="search_button"
                style={{
                  width: "100%",
                  marginbottom: "20px",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderradius: "3px",
                }}
              >
                Find Tutor
              </button>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="containerxyz">
            <div className="w3-container">
              <div className="w3-card" style={{ width: "100%" }}>
                <img
                  src="images/img_avatar3.png"
                  alt="Person"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <br></br>
            <h4>
              Name{" "}
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-star" /> <b>4</b>
              </span>
            </h4>
            <hr></hr>
            <p>Date & Time</p>
            <p
              style={{
                color: "black",
                fontSize: "30px",
                marginTop: "-30px",
              }}
            >
              03 May, 09:30
            </p>

            <hr />
            <p
              style={{
                color: "black",
                fontWeight: "3px",
                fontSize: "20px",
              }}
            >
              Class Details{" "}
              <span
                className="price"
                style={{
                  color: "black",
                  fontWeight: "3px",
                }}
              >
                Price
              </span>
            </p>
            <p
              className="price"
              style={{
                color: "black",
                fontWeight: "3px",
              }}
            >
              1hr Class <span className="price">Rs.250</span>
            </p>
            <p
              className="price"
              style={{
                color: "black",
                fontWeight: "3px",
              }}
            >
              Cancellation Fee{" "}
              <span
                className="price"
                className="price"
                style={{
                  color: "green",
                  fontWeight: "3px",
                }}
              >
                None
              </span>
            </p>
            <p
              className="price"
              style={{
                color: "black",
                fontWeight: "3px",
                fontSize: "20px",
              }}
            >
              Total{" "}
              <span
                className="price"
                style={{ color: " #360f64", fontSize: "20px" }}
              >
                <b>$30</b>
              </span>
            </p>
          </div>
        </div>
        {/* Modal HTML */}
        <div id="myModal" className="modal fade">
          <div className="modal-dialog modal-confirm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="icon-box">
                  <i className="material-icons"></i>
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
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutCard;