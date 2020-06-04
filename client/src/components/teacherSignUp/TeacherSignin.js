import React, { Component , useState} from 'react'
import axios from "axios";
// import { setTeacherSession } from "../../Utils/Common2";

function TeacherSignin(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("/api/teacher/login", {
        email: email.value,
        password: password.value
      })
      .then(response => {
        setLoading(false);
        setTeacherSession(response.data.token, response.data.teacher);
        props.history.push("/card");
       
      })
      .catch(error => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
          
        else setError("Something went wrong. Please try again later.");
        alert("some error");
      });
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">Teacher Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  name="email"
                  placeholder="Email"
                  type="text"
                  {...email}
                  autoComplete="new-password"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  name="pass"
                  placeholder="Password"
                  type="password"
                  {...password}
                  autoComplete="new-password"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  value={loading ? "Loading..." : "Login"}
                  onClick={handleLogin}
                  disabled={loading}
                >
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div className="text-center p-t-136">
                <a className="txt2" href="\TeacherSignup">
                  Create your Account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};

export default TeacherSignin;
