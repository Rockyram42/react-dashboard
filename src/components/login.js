import React from "react";
import * as action from "../redux/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handelInputChange = this.handelInputChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  // update state onChange
  handelInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // form submit handeler
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
    this.props.PrivateLoginUser(this.state);
  };

  render() {
    if (this.props.isLoggedIn) return <Redirect exact to="/" />;
    return (
      <div>
        <div className="container">
          <div className="row tm-mt-big">
            <div className="col-12 mx-auto tm-login-col">
              <div className="bg-white tm-block">
                <div className="row">
                  <div className="col-12 text-center">
                    <i className="fas fa-3x fa-tachometer-alt tm-site-icon text-center"></i>
                    <h2 className="tm-block-title mt-3">Login</h2>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <form
                      className="tm-login-form"
                      onSubmit={this.handelSubmit}
                    >
                      <div className="input-group">
                        <label className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                          id="email"
                          value={this.state.email}
                          onChange={this.handelInputChange}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control validate"
                          id="password"
                          value={this.state.password}
                          onChange={this.handelInputChange}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary d-inline-block mx-auto"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, action)(Login);
