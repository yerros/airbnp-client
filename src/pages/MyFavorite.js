import React, { Component } from "react";
import LayoutAccount from "../component/LayoutAccount";
import { Get, Delete, formatRupiah } from "../config";
import { setAlert } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyFavorite extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    Get("favorite").then(res => {
      this.setState({ favorites: res });
    });
  }

  deleteFavorite(id) {
    const confirm = window.confirm("Are you sure to delete this Property?");
    if (confirm) {
      Delete(`favorite/${id}`).then(res => {
        this.setState({
          favorites: []
        });
        this.props.sendAlert("Property Succefully Deleted", "success");
        this.getFavorites();
      });
      this.getFavorites();
    }
  }
  render() {
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            My Favorite
          </h4>
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col" style={{ width: "8%" }}>
                  #
                </th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.favorites.map((item, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <div className="media align-items-center">
                        <img
                          style={{ maxWidth: 100 }}
                          class="img-fluid "
                          src={item.property.images}
                          alt="Description"
                        />
                      </div>
                    </td>
                    <td>
                      <Link
                        to={`/details/${item.property._id}`}
                        className="text-black"
                      >
                        {item.property.title}
                      </Link>
                    </td>
                    <td className="text-primary">
                      Rp. {formatRupiah(item.property.price)}{" "}
                      <span className="text-black">/ night</span>
                    </td>
                    <button
                      onClick={() => this.deleteFavorite(item._id)}
                      type="button"
                      className="btn btn-danger btn-xs mr-2"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </LayoutAccount>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendAlert: (msg, type) => dispatch(setAlert(msg, type))
  };
};

export default connect(null, mapDispatchToProps)(MyFavorite);
