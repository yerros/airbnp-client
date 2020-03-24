import React, { Component } from "react";
import LayoutAccount from "../component/LayoutAccount";

export default class MyAccount extends Component {
  render() {
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            MyAccount
          </h4>
        </div>
      </LayoutAccount>
    );
  }
}
