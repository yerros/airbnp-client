/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const checkRoles = role => {
    if (role === "host") {
      setIsAdmin(false);
      setIsHost(true);
      setIsGuest(true);
    } else if (role === "guest") {
      setIsAdmin(false);
      setIsHost(false);
      setIsGuest(true);
    } else if (role === "admin") {
      setIsAdmin(true);
      setIsHost(false);
      setIsGuest(true);
    }
  };

  useEffect(() => {
    checkRoles(props.role || "guest");
  });

  return (
    <div className="tab-wrapper shadow-none">
      <ul
        className="nav flex-column mb-0 tab-nav-list"
        id="pills-tab"
        role="tablist"
      >
        {isAdmin ? (
          <div>
            <h6 className="text-gray-6 font-weight-bold font-size-17 px-4 ml-xl-1 mt-xl-1 mb-4 pb-1">
              Admin Dashboard
            </h6>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/dashboard"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal ml-1 text-gray-1">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/property"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Properties
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/category"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Category
                </span>
              </Link>
            </li>

            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/orders"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Orders
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/revenue"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Revenue
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/users"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Users
                </span>
              </Link>
            </li>
          </div>
        ) : (
          <div></div>
        )}
        {isHost ? (
          <div>
            <h6 className="text-gray-6 font-weight-bold font-size-17 px-4 ml-xl-1 mt-xl-1 mb-4 pb-1">
              Host Dashboard
            </h6>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/dashboard"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal ml-1 text-gray-1">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/property"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Properties
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                className="nav-link px-4 d-flex align-items-center"
                to="/myaccount/orders"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  Booking
                </span>
              </Link>
            </li>
          </div>
        ) : (
          <div></div>
        )}

        {isGuest ? (
          <div>
            <h6 className="text-gray-6 font-weight-bold font-size-17 px-4 ml-xl-1 mt-xl-1 mb-4 pb-1">
              My Account
            </h6>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal ml-1 text-gray-1">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/myprofile"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  My Profile
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myaccount/myorder"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  My Order
                </span>
              </Link>
            </li>
            <li className="nav-item mx-0 mb-2 pb-1">
              <Link
                to="/myfavorite"
                className="nav-link px-4 d-flex align-items-center"
              >
                <i className="fas fa-chevron-right font-size-12 mr-1 text-gray-3" />
                <span className="font-weight-normal text-gray-1 ml-1">
                  My Favorites
                </span>
              </Link>
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </ul>
      {/* Tab Content */}
    </div>
  );
}
