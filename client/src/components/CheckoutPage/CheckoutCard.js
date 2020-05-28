import "./Checkout.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUser, removeUserSession } from "../../Utils/Common";
function CheckoutCard(props) {

var url_string = window.location.href;
var url = new URL(url_string);
var date = new Date().getDate();  
var month = new Date().getMonth() + 1;   
var year = new Date().getFullYear();  
var finaldate = date + "-" + month + "-" + year;
var id = url.searchParams.get("teacherid");
var userid = url.searchParams.get("userid");
var username = url.searchParams.get("username");
var bookingid = url.searchParams.get("bookingid");
var subject = url.searchParams.get("Subject");
var day = url.searchParams.get("Day");
var datenew = url.searchParams.get("Date");
var time = url.searchParams.get("Time");
var teachername = url.searchParams.get("teachername");
var price= url.searchParams.get("Price");
const [CardName, setCardName] = useState("");
const [CardNumber, setCardNumber] = useState("");
const [ExpiryMonth, setCardExpiryMonth] = useState("");
const [ExpiryYear, setCardExpiryYear] = useState("");
const [CvvNumber, setCardCvv] = useState("");
const [value, setValue] = useState(null);
const classid = Math.floor(10000 + Math.random() * 90000);

 const user = getUser();

 // handle click event of logout button
 const handleLogout = () => {
   removeUserSession();
   props.history.push("/");
 };

async function getSomething() {
try {
const response = await axios.get(`/api/teachers/dash?id=${id}`);
setValue(response.data);
console.log(response.data);
} catch (error) {
console.error(error);
}
}
// handle click event of logout button
// const handleLogout = () => {
//   removeUserSession();
//   props.history.push("/TeacherLogin");
// };
function call2functions(){
bookfunction2();
confirmbook();
userbooking();
handleLogout();

}
async function bookfunction2() {
try {
const response = await axios.put(
`/api/teachers/newx?id=${id}&index=${"1"}&buttonid=${bookingid}`
);
setValue(response.data);
console.log(response.data);
window.location.reload();
} catch (error) {
console.error(error);
}
}
 async function confirmbook() {
try {
const response = await axios.put(
`/api/teachers/booked?id=${id}&index=${"1"}&buttonid=${bookingid}&Subject=${subject}&Price=${price}&Day=${day}&Date=${datenew}&Time=${time}&userid=${userid}&username=${username}&classid=${classid}`
);
setValue(response.data);
console.log(response.data);
window.location.reload();
} catch (error) {
console.error(error);
}
}
async function userbooking() {
  try {
    const response = await axios.put(
      `/api/users/classbooked?id=${id}&buttonid=${bookingid}&teachername=${teachername}&Price=${price}&Subject=${subject}&Day=${day}&Date=${datenew}&Time=${time}&userid=${userid}&username=${username}&classid=${classid}`
    );
    setValue(response.data);
    console.log(response.data);
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
getSomething();
}, []);

{
return (
<div>

{value&&value.map((data)=>{return (
<div className="row2">
  <div className="col-75">
    <div className="containerxyzz">
      <form action="/Success">
        <div className="row">
          <div className="col-50">
            <br></br>
            <h3>Payment Details</h3>
            <label htmlFor="fname">
              Accepted Cards
            </label>
            <div className="icon-container">
              <i
                className="fa fa-cc-visa"
                style={{ color: "navy" }}
              />
              <i
                className="fa fa-cc-amex"
                style={{ color: "blue" }}
              />
              <i
                className="fa fa-cc-mastercard"
                style={{ color: "red" }}
              />
              <i
                className="fa fa-cc-discover"
                style={{ color: "orange" }}
              />
            </div>
            <label htmlFor="cname">
              Name
            </label>
            <input
              type="text"
              id="cname"
              name="cardname"
              onChange={(event) =>
                setCardName(
                  event.target.value
                )
              }
              placeholder="John More Doe"
              style={{
                width: "100%",
                marginbottom: "20px",
                padding: "12px",
                border: "1px solid #ccc",
                borderradius: "3px",
              }}
            />
            <label htmlFor="ccnum">
              Credit card number
            </label>
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              onChange={(event) =>
                setCardNumber(
                  event.target.value
                )
              }
              placeholder="1111-2222-3333-4444"
              style={{
                width: "100%",
                marginbottom: "20px",
                padding: "12px",
                border: "1px solid #ccc",
                borderradius: "3px",
              }}
            />
            <label htmlFor="expmonth">
              Exp Month
            </label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              onChange={(event) =>
                setCardExpiryMonth(
                  event.target.value
                )
              }
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
                <label htmlFor="expyear">
                  Exp Year
                </label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  onChange={(event) =>
                    setCardExpiryYear(
                      event.target.value
                    )
                  }
                  placeholder={2025}
                  style={{
                    width: "100%",
                    marginbottom: "20px",
                    padding: "12px",
                    border:
                      "1px solid #ccc",
                    borderradius: "3px",
                  }}
                />
              </div>
              <div className="col-50">
                <label htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder={352}
                  onChange={(event) =>
                    setCardCvv(
                      event.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    marginbottom: "20px",
                    padding: "12px",
                    border:
                      "1px solid #ccc",
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
            backgroundColor: "#360f64",
          }}
          onClick={() => {
            call2functions();
          }}
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="containerxyz">
      <div className="w3-container">
        <div
          className="w3-card"
          style={{ width: "100%" }}
        >
          <img
            src="images/img_avatar3.png"
            alt="Person"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <br></br>
      <h4>
        {data.name}
        <span
          className="price"
          style={{ color: "black" }}
        >
          <i className="fa fa-star" />{" "}
          <b>{data.Rating}</b>
        </span>
      </h4>
      <hr></hr>
      <p>Date & Time</p>
      <br></br>
      <p
        style={{
          color: "black",
          fontSize: "25px",
          marginTop: "-30px",
        }}
      >
        {finaldate}
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
        1hr Class{" "}
        <span className="price">
          Rs.{data.Price}
        </span>
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
          style={{
            color: " #360f64",
            fontSize: "20px",
          }}
        >
          <b> Rs.{data.Price}</b>
        </span>
      </p>
    </div>
  </div>
</div>
);})}
</div>
);



}






}
export default CheckoutCard;