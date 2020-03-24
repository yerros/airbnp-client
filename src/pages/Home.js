import React, { Component } from "react";
import { Get } from "../config";
import { connect } from "react-redux";

import { setUser } from "../actions";
import Layout from "../component/Layout";
import Category from "../component/Category";
import ProductList from "../component/ProductList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    };
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get("token");
    if (token) {
      localStorage.setItem("token", token);
      Get("auth/user").then(res => {
        this.props.signIn(res);
      });
      this.props.history.push("/");
    }
    this.getProperty();
  }

  getProperty() {
    Get("property").then(res => {
      this.setState({ properties: res });
    });
  }
  render() {
    return (
      <Layout>
        <Category />
        <ProductList title="Trending Rental" data={this.state.properties} />
        <div className="banner-block banner-v6">
          <div
            className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
            data-options="{direction: 'normal'}"
          >
            {/* Apply your Parallax background image here */}
            <div
              className="divimage dzsparallaxer--target"
              style={{
                height: "130%",
                backgroundImage: "url(images/img7.jpg)"
              }}
            />
            <div className="container text-center space-2 space-md-3">
              <div className="pb-3 mb-1 space-top-lg-1 mt-2">
                <h5 className="text-white font-size-40 font-weight-bold mb-1">
                  Airbnb plus places to stay
                </h5>
                <p className="text-white font-weight-normal mb-3 mb-lg-6">
                  A selection of places to stay verified for quality and design
                </p>
                <a
                  className="btn btn-outline-white border-width-2 rounded-xs min-width-200 font-weight-normal transition-3d-hover"
                  href="../blog/blog-single.html"
                >
                  Explore Stays
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProductList title="Trending Apartement" data={this.state.properties} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: value => dispatch(setUser(value))
  };
};

export default connect(null, mapDispatchToProps)(Home);
