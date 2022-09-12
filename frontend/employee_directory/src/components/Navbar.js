import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info color-block-dark info-color-dark z-depth-2">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div> <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee">
                  Employee Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </div> 
              <Link className="btn btn-outline-light text-left" to="/adduser">Add User</Link>
      </nav>
    </div>
  );
};

export default Navbar;
