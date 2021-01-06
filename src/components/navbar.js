import React from "react";
import { Link } from "react-router-dom";
import SigninNav from "./signinnav";
import SignOutNav from "./signoutnav";
import { connect } from "react-redux";

function NavBar(props) {
  // const authUser = props.isLoggedIn;
  const navItem = props.isLoggedIn ? <SigninNav /> : <SignOutNav />;
  return (
    <>
      <div className="conatainer">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <i className="fas fa-3x fa-tachometer-alt tm-site-icon"></i>
                <h1 className="tm-site-title mb-0">Dashboard</h1>
              </Link>
              <button
                className="navbar-toggler ml-auto mr-0"
                type="button"
                data-toggle="collapse"
                data-target="#javascriptnavbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {navItem}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state);

  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(NavBar);
