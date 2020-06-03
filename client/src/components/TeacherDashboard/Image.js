import React from "react";
import "./Image.css";
function Image() {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
        <a className="navbar-brand" href="#">
          BootstrapBay
        </a>

        <div className="collapse navbar-collapse" id="navbar-list-4">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Dashboard
                </a>
                <a className="dropdown-item" href="#">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Image;
