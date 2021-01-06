import React, { Component } from "react";
import Userimg from "./img/profile-image.png";

export default class Account extends Component {
  render() {
    return (
      <>
        <div className="row tm-content-row tm-mt-big">
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Accounts</h2>
                </div>
              </div>
              <ol className="tm-list-group tm-list-group-alternate-color tm-list-group-pad-big">
                <li className="tm-list-group-item">Donec eget libero</li>
                <li className="tm-list-group-item">
                  Nunc luctus suscipit elementum
                </li>
                <li className="tm-list-group-item">
                  Maecenas eu justo maximus
                </li>
                <li className="tm-list-group-item">
                  Pellentesque auctor urna nunc
                </li>
                <li className="tm-list-group-item">
                  Sit amet aliquam lorem efficitur
                </li>
                <li className="tm-list-group-item">
                  Pellentesque auctor urna nunc
                </li>
                <li className="tm-list-group-item">
                  Sit amet aliquam lorem efficitur
                </li>
              </ol>
            </div>
          </div>
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title">Edit Account</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <form action="" className="tm-signup-form">
                    <div className="form-group">
                      <label >Account Name</label>
                      <input
                        placeholder="Vulputate Eleifend Nulla"
                        id="name"
                        name="name"
                        type="text"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group">
                      <label >Account Email</label>
                      <input
                        placeholder="vulputate@eleifend.co"
                        id="email"
                        name="email"
                        type="email"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input
                        placeholder="******"
                        id="password"
                        name="password"
                        type="password"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group">
                      <label >Re-enter Password</label>
                      <input
                        placeholder="******"
                        id="password2"
                        name="password2"
                        type="password"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group">
                      <label >Phone</label>
                      <input
                        placeholder="010-030-0440"
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-control validate"
                      />
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                      <div className="col-12 col-sm-8 tm-btn-right">
                        <button type="submit" className="btn btn-danger">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block">
              <h2 className="tm-block-title">Profile Image</h2>
              <img src={Userimg} alt="ProfileImage" className="img-fluid" />
              <div className="custom-file mt-3 mb-3">
                {/* <input id="fileInput" type="file" /> */}
                <input
                  type="button"
                  className="btn btn-primary d-block mx-xl-auto"
                  value="Upload New..."
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
