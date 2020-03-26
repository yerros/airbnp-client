/* eslint jsx-a11y/anchor-is-valid: 0, jsx-a11y/alt-text:0 */
import React, { Component } from "react";

import { Post, BaseUrl } from "../config";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
      showAlert: false,
      showToken: false,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      alert: { msg: "Registration sucefull", type: "success" },
      authyId: "",
      token: ""
    };
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();
    const { firstname, lastname, email, phone } = this.state;
    const data = {
      firstname,
      lastname,
      email,
      phone
    };
    Post("auth/register", data).then(res => {
      if (res.status === "error") {
        this.setState({
          alert: { msg: res.data, type: "danger" },
          showAlert: true
        });
      } else {
        this.setState({
          alert: { msg: res.data, type: "success" },
          showAlert: true
        });
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { phone } = this.state;
    const data = {
      phone
    };
    Post("auth/otp", data).then(res => {
      console.log(res);
      if (res.success === false) {
        this.setState({
          alert: { msg: res.message, type: "danger" },
          showAlert: true
        });
      } else {
        this.setState({
          alert: { msg: res.message, type: "success" },
          authyId: res.id,
          showAlert: true,
          showToken: true
        });
      }
    });
  };

  handleToken = e => {
    e.preventDefault();
    const { authyId, token } = this.state;
    const data = {
      authyId,
      token
    };
    Post("auth/login", data).then(res => {
      if (res.success === false) {
        this.setState({
          alert: { msg: res.message, type: "danger" },
          showAlert: true
        });
      } else {
        window.location.href = res;
      }
    });
  };

  alertLocal(alert) {
    return (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show mt-3`}
        role="alert"
      >
        {alert.msg}
        <button
          type="button"
          className="close"
          onClick={() => this.setState({ showAlert: false })}
        >
          <span>×</span>
        </button>
      </div>
    );
  }
  render() {
    const { firstname, lastname, email, phone, token } = this.state;
    return (
      <div
        id="signUpDropdown"
        className="dropdown-menu dropdown-unfold dropdown-menu-right dropdown-menu-right-fix-wd-10 p-0 mt-0 w-max-sm-100 u-unfold--css-animation font-size-16 py-0 mt-0"
        aria-labelledby="signUpDropdownInvoker"
        style={{ minWidth: "500px" }}
      >
        <div className="card rounded-xs">
          {/* Login */}
          <div id="login" style={{ opacity: 1 }} data-target-group="idForm">
            {/* Header */}
            <div className="card-header text-center">
              <h3 className="h5 mb-0 font-weight-semi-bold">Login / Sign Up</h3>
              {this.state.showAlert ? this.alertLocal(this.state.alert) : null}
            </div>
            {/* End Header */}
            {this.state.showLogin ? (
              <div className="card-body pt-6 pb-4">
                {/* Form Group */}
                <div className="form-group pb-1">
                  <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                    <label className="sr-only" htmlFor="signinSrEmail">
                      Email
                    </label>
                    <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                      <input
                        type="email"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={this.handleChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="signinEmail">
                          <span className="fa fa-phone font-size-20" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                {this.state.showToken ? (
                  <div>
                    {/* Form Group */}
                    <div className="form-group pb-1">
                      <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                        <label className="sr-only" htmlFor="signinSrEmail">
                          Token
                        </label>
                        <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                          <input
                            type="number"
                            className="form-control"
                            name="token"
                            placeholder="Enter token here"
                            value={token}
                            onChange={this.handleChange}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text" id="signinEmail">
                              <span className="fa fa-phone font-size-20" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Form Group */}
                    <div className="mb-3 pb-1">
                      <button
                        type="submit"
                        onClick={this.handleToken}
                        className="btn btn-md btn-block btn-blue-1 rounded-xs font-weight-bold transition-3d-hover"
                      >
                        Token
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-3 pb-1">
                    <button
                      onClick={this.handleLogin}
                      type="submit"
                      className="btn btn-md btn-block btn-blue-1 rounded-xs font-weight-bold transition-3d-hover"
                    >
                      Login
                    </button>
                  </div>
                )}
                <div className="text-center mt-2 mb-4 pb-1">
                  <span className="d-block text-gray-1 fontsize-14">
                    Don't have account?
                    <button
                      onClick={() =>
                        this.setState({ showLogin: !this.state.showLogin })
                      }
                      type="button"
                      className="btn btn-link"
                    >
                      Register here
                    </button>
                  </span>
                </div>
              </div>
            ) : (
              <form>
                <div className="card-body pt-6 pb-4">
                  {/* Form Group */}
                  <div className="form-group pb-1">
                    <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                      <label className="sr-only" htmlFor="signinSrEmail">
                        First Name
                      </label>
                      <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          placeholder="First Name"
                          value={firstname}
                          onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="signinEmail">
                            <span className="flaticon-user font-size-20" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div className="form-group pb-1">
                    <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                      <label className="sr-only" htmlFor="signinSrEmail">
                        Last Name
                      </label>
                      <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          placeholder="Last Name"
                          value={lastname}
                          onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="signinEmail">
                            <span className="flaticon-user font-size-20" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div className="form-group pb-1">
                    <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                      <label className="sr-only" htmlFor="signinSrEmail">
                        Email
                      </label>
                      <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="signinEmail">
                            <span className="far fa-envelope font-size-20" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div className="form-group pb-1">
                    <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                      <label className="sr-only" htmlFor="signinSrEmail">
                        Phone
                      </label>
                      <div className="input-group input-group-tranparent input-group-borderless input-group-radiusless">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="signinEmail">
                            <span className="fa fa-phone font-size-20" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  <div className="mb-3 pb-1">
                    <button
                      onClick={this.handleRegister}
                      type="submit"
                      className="btn btn-md btn-block btn-blue-1 rounded-xs font-weight-bold transition-3d-hover"
                    >
                      Register
                    </button>
                  </div>
                  <div className="text-center mt-2 mb-4 pb-1">
                    <span className="d-block text-gray-1 fontsize-14">
                      Already have account?
                      <button
                        onClick={() =>
                          this.setState({ showLogin: !this.state.showLogin })
                        }
                        type="button"
                        className="btn btn-link"
                      >
                        Login here
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            )}
            <div className="card-footer p-0">
              <div className="card-footer__top border-bottom border-color-8 py-3">
                <div className="text-center mt-2 mb-4 pb-1">
                  <span className="d-block text-gray-1 fontsize-14">
                    or continue with
                  </span>
                </div>
                <div className="d-flex mb-3">
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href = `${BaseUrl}auth/facebook`)
                    }
                    className="btn btn-block btn-sm btn-facebook transition-3d-hover"
                    href="#"
                  >
                    <span className="fab fa-facebook-f mr-2" />
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="btn btn-block btn-sm btn-google transition-3d-hover ml-5 mt-0"
                    onClick={() =>
                      (window.location.href = `${BaseUrl}auth/google`)
                    }
                  >
                    <span className="fab fa-google mr-2" />
                    Google
                  </button>
                  <a
                    className="btn btn-block btn-sm btn-twitter transition-3d-hover ml-5 mt-0"
                    href="#"
                  >
                    <span className="fab fa-twitter mr-2" />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Login */}
        </div>
      </div>
    );
  }
}
