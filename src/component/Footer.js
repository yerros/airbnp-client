import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="space-1">
        <div className="container">
          <div className="d-lg-flex d-md-block justify-content-between align-items-center">
            {/* Copyright */}
            <p className="mb-3 mb-lg-0 text-gray-1">
              © 2020 MyTravel. All rights reserved
            </p>
            {/* End Copyright */}
            {/* Social Networks */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/index.html"
                >
                  Home
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v4.html"
                >
                  Hotel
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v5.html"
                >
                  Tour
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v6.html"
                >
                  Activity
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v7.html"
                >
                  Rental
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v8.html"
                >
                  Car
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v9.html"
                >
                  Yacht
                </a>
              </li>
              <li className="list-inline-item  pb-3 pb-md-0">
                <a
                  className="list-group-item-action text-decoration-on-hover pr-3"
                  href="../home/home-v10.html"
                >
                  Flights
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="list-group-item-action text-decoration-on-hover"
                  href="../others/destination.html"
                >
                  Pages
                </a>
              </li>
            </ul>
            {/* End Social Networks */}
          </div>
        </div>
      </div>
    </footer>
  );
}
