import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function SigninNav() {
  return (
    <>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle className="nav-link" style={{ border: "none" }}>
              Reports
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Daily Report</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Weekly Report</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Yearly Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/account">
            Accounts
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle className="nav-link" style={{ border: "none" }}>
              Settings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Billing</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Customize</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/login">
            <i className="far fa-user mr-2 tm-logout-icon"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
