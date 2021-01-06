import React from "react";
import { Link } from "react-router-dom";

export default function SignOutNav() {
  return (
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/login">
            <i className="far fa-user mr-2 tm-logout-icon"></i>
            <span>SignUp</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/login">
            <i className="far fa-user mr-2 tm-logout-icon"></i>
            <span>LogIn</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
