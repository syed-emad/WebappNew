import React, { Component, useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import HomeFinal from "./components/Homepage/HomeFinal";
import App2 from "./App2";

import Login from "./components/LoginSignup/Login";
import Register from "./components/LoginSignup/Register";
import Dashboard from "./components/Dashboard";
import search from "./components/SearchResult/search";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import SearchPage from "./components/SearchResult/SearchPage";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
// import { getTeacherToken, removeTeacherSession, setTeacherSession } from "./Utils/Common2";
// import TeacherFinal from "./components/TeacherPage/Card";
import Card from "./components/TeacherPage/Card";
import Checkout from "./components/CheckoutPage/Checkout";
import Success from "./components/CheckoutPage/Success";
import TeacherSignin from "./components/teacherSignUp/TeacherSignin";
import teacherfinal from "./components/teacherSignUp/teacherfinal";
import test from "./components/teacherSignUp/test";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`/verifyToken?token=${token}`)
      .then(response => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch(error => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="header"></div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomeFinal} />
              
              
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/login-teacher" component={TeacherSignin} />
              <PublicRoute exact path="/search" component={SearchPage} />
              <PublicRoute exact path="/card" component={Card} />
              <PublicRoute exact path="/Checkout" component={Checkout} />
              <PublicRoute exact path="/Success" component={Success} />
              <PublicRoute exact path="/Register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              {/* <PublicRoute  exact path ="/list" component={TeacherFinal}/> */}
              <PublicRoute  exact path ="/TeacherSignup" component={teacherfinal}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;