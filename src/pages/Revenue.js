import React, { Component } from "react";
import LayoutAccount from "../component/LayoutAccount";

export default class Revenue extends Component {
  render() {
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            Revenue
          </h4>

          <div className="row">
            <div className="col-md-1 offset-md-8">Filter: </div>
            <div className="col-md-3 ml-auto">
              <select class="form-control form-control-sm mb-2">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last Months</option>
                <option>Last 3 Months</option>
                <option>Last Years</option>
              </select>
            </div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-1 offset-md-8">Total: </div>
            <div className="col-md-3 ml-auto">Rp. 50000</div>
          </div>
        </div>
      </LayoutAccount>
    );
  }
}
