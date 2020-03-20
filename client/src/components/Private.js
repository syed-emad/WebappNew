import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/2/login");
  };

  return (
    <div>
      Private Page
      <br />
    </div>
  );
}

export default Dashboard;