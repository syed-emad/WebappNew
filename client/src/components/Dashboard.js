import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import HomeFinal from "./Homepage/HomeFinal";
import UpperSection from "./Homepage/UpperSection";
import Home from "./Home";
function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
      <p>-----------------------------------------</p>
      <Home />
    </div>
  );
}

export default Dashboard;
