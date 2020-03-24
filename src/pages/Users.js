import React, { Component } from "react";
import LayoutAccount from "../component/LayoutAccount";

export default class Users extends Component {
  render() {
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            Users
          </h4>
          <table class="table table-light">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Project</th>
                <th scope="col">Priority</th>
                <th scope="col">Due date</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="font-size-1">
              <tr>
                <td class="align-middle font-weight-normal">
                  Home page redesign
                </td>
                <td class="align-middle">Spotify</td>
                <td class="align-middle text-danger">
                  <span class="fas fa-arrow-up mr-1"></span>
                  Highest
                </td>
                <td class="align-middle">25 Jul</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-primary small mr-1"></span>
                  In progress
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">Logo branding</td>
                <td class="align-middle">Dropbox</td>
                <td class="align-middle text-warning">
                  <span class="fas fa-arrow-up mr-1"></span>
                  Medium
                </td>
                <td class="align-middle">12 Aug</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-primary small mr-1"></span>
                  In progress
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">
                  Website redesign
                </td>
                <td class="align-middle">Google</td>
                <td class="align-middle text-danger">
                  <span class="fas fa-arrow-up mr-1"></span>
                  High
                </td>
                <td class="align-middle">15 Aug</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-success small mr-1"></span>
                  Completed
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">
                  Home page redesign
                </td>
                <td class="align-middle">MyTravelApp</td>
                <td class="align-middle text-warning">
                  <span class="fas fa-arrow-up mr-1"></span>
                  Medium
                </td>
                <td class="align-middle">01 Aug</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-success small mr-1"></span>
                  Completed
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">
                  SEO optimization
                </td>
                <td class="align-middle">Slack</td>
                <td class="align-middle text-success">
                  <span class="fas fa-arrow-down mr-1"></span>
                  Lowest
                </td>
                <td class="align-middle">02 Aug</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-warning small mr-1"></span>
                  On hold
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">Branding</td>
                <td class="align-middle">Spotify</td>
                <td class="align-middle text-danger">
                  <span class="fas fa-arrow-up mr-1"></span>
                  High
                </td>
                <td class="align-middle">05 Sep</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-primary small mr-1"></span>
                  In progress
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">Logo redesign</td>
                <td class="align-middle">Htmlstream</td>
                <td class="align-middle text-danger">
                  <span class="fas fa-arrow-up mr-1"></span>
                  High
                </td>
                <td class="align-middle">15 Sep</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-success small mr-1"></span>
                  Completed
                </td>
              </tr>

              <tr>
                <td class="align-middle font-weight-normal">
                  Website redesign
                </td>
                <td class="align-middle">GitHub</td>
                <td class="align-middle text-success">
                  <span class="fas fa-arrow-down mr-1"></span>
                  Low
                </td>
                <td class="align-middle">16 Sep</td>
                <td class="align-middle">
                  <span class="fas fa-circle text-warning small mr-1"></span>
                  On hold
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </LayoutAccount>
    );
  }
}
