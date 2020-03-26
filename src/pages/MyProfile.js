import React, { Component } from "react";
import { connect } from "react-redux";
import { Put } from "../config";
import LayoutAccount from "../component/LayoutAccount";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    const { firstname, lastname, email, _id } = props.user;
    this.state = {
      _id: _id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: ""
    };
  }

  updateProfile = e => {
    e.preventDefault();
    const { firstname, lastname } = this.state;
    const data = {
      firstname,
      lastname
    };
    Put(`auth/user/${this.state._id}`, data).then(res => {
      console.log(res);
    });
  };
  handleChane = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  render() {
    const { firstname, lastname } = this.state;
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            MyProfile
          </h4>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Fisrt Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={this.handleChane}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={this.handleChane}
              />
            </div>
            <button
              onClick={this.updateProfile}
              type="submit"
              className="btn btn-primary"
            >
              Update Profile
            </button>
          </form>
        </div>
      </LayoutAccount>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps)(MyProfile);
