import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeFinal from "./components/Homepage/HomeFinal";
import App2 from "./App2";
import Login from "./components/LoginSignup/Login";
import Register from "./components/LoginSignup/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import PublicRouteTeacher from "./Utils/PublicRouteTeacher";
import SearchPage from "./components/SearchResult/SearchPage";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import Card from "./components/TeacherPage/Card";
import Checkout from "./components/CheckoutPage/Checkout";
import Success from "./components/CheckoutPage/Success";
import Final from "./components/TeacherDashboard/Chatbox/Final";
import PrivateRouteTeacher from "./Utils/PrivateRouteTeacher";
import PrivateRouteAdmin from "./Utils/PrivateRouteAdmin";
import PublicRouteAdmin from "./Utils/PublicRouteAdmin";
import PublicRouteDashboard from "./Utils/PublicRouteDashboard"
import search2 from "./components/SearchResult/search2";
import TP from "./components/TeacherProfile/TeachersProfile";

import DashboardMain from "./components/TeacherDashboard/DashboardMain";
import TeacherLogin from "./components/TeacherLogin/TeacherLogin"; 
import PublicRoute22 from "./Utils/PublicRoute22";
import UserDashboardMain from "./components/UserDashboard/UserDashboardMain";
import LoginDashboard from "./components/LoginSignup/LoginDashboard";
import some from "./components/VideoChat/Call";
import some2 from "./components/VideoChat/ChannelForm";
import video from "./components/VideoChat/VideoStyle";
import chat from "./components/VideoChat/Chat/Chat/Chat";
import join from "./components/VideoChat/Chat/Join/Join";
import TeacherFinal from "./components/teacherSignUp/teacherfinal";
import Admin from "./components/Admin/Admin";
import UserBooking from './components/Admin/UserBookings';
import TeacherBookings from "./components/Admin/TeacherBookings";
import TeacherSchedule from './components/Admin/TeacherSchedule';
import AdminLogin from "./components/AdminLogin/AdminLogin";
import functionalpage from "./components/VideoChat/functionalpage";
function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
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
              <PublicRoute
                exact
                path="/loginDashboard"
                component={LoginDashboard}
              />
              <Route exact path="/search" component={SearchPage} />
              <PublicRoute exact path="/search2" component={search2} />
              <PublicRoute exact path="/TeachersProfile" component={TP} />
              <PublicRoute exact path="/card" component={Card} />
              <PublicRoute22 exact path="/Checkout" component={Checkout} />
              <PublicRoute exact path="/Success" component={Success} />
              <PublicRoute exact path="/Register" component={Register} />
              <Route exact path="/functionalpage" component={functionalpage} />
              <PublicRoute
                exact
                path="/teachersignup"
                component={TeacherFinal}
              />
              {/* <Route exact path="/admin" component={Admin} /> */}
              <Route exact path="/userbookingsa" component={UserBooking} />
              <Route
                exact
                path="/teacherbookingsa"
                component={TeacherBookings}
              />
              <Route
                exact
                path="/teacherschedulea"
                component={TeacherSchedule}
              />
              <PrivateRouteTeacher
                exact
                path="/TeacherDashboard"
                component={DashboardMain}
              />
              <PrivateRoute
                exact
                path="/UserDashboardMain"
                component={UserDashboardMain}
              />
              <Route exact path="/VideoStyle" component={video} />
              <Route exact path="/join" component={join} />
              <Route exact path="/chat" component={chat} />
              {/* <Route exact path="/VideoStyle" component={some2} /> */}
              <PrivateRouteTeacher exact path="/messages" component={Final} />
              <PublicRouteTeacher
                exact
                path="/TeacherLogin"
                component={TeacherLogin}
              />
              <PublicRouteAdmin
                exact
                path="/adminlogin"
                component={AdminLogin}
              />
              <PrivateRouteAdmin exact path="/admin" component={Admin} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route exact path="/2" component={App2} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
