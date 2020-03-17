import React, { Component, useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import HomeFinal from "./components/Homepage/HomeFinal";
import App2 from "./App2";

import RegisterNew from "./components/LoginSignup/RegisterNew";
import Register from "./components/LoginSignup/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import TeacherFinal from "./components/TeacherPage/Card";
import Card from "./components/TeacherPage/Card";

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
              <Route exact path="/2" component={App2} />
              <PublicRoute exact path="/login" component={RegisterNew} />
              <PublicRoute exact path="/card" component={Card} />
              <PublicRoute exact path="/Register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
