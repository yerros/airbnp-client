import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Alert from "./Alert";

class LayoutAccount extends Component {
  componentDidMount() {
    const checkLogin = this.props.isLogin;
    if (!checkLogin) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Layout>
        <div className="terms_tab border-bottom border-color-8 pt-lg-1 mt-5">
          <div className="container mb-4 mb-lg-11 pb-lg-1">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3">
                <div className="py-4 border border-color-7 rounded-xs mb-4 mb-md-0">
                  {/* Tab Wrapper */}
                  <Sidebar role={this.props.user.role} />
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <Alert />
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin
  };
};

export default connect(mapStateToProps)(withRouter(LayoutAccount));
