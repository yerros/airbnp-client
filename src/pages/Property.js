import React, { Component } from "react";
import request from "superagent";
import { setAlert } from "../actions";
import { connect } from "react-redux";
import { Get, Post, Put, Delete, formatRupiah } from "../config";
import Autocomplete from "react-google-autocomplete";
import Map from "../component/Map";
import LayoutAccount from "../component/LayoutAccount";

const CLOUDINARY_UPLOAD_PRESET = "kyqfnn6h";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/diiizbyxa/upload";

class Property extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showTable: true,
      showMap: false,
      action: null,
      lat: -2.54,
      lng: 118.01,
      categories: [],
      category: "",
      title: "",
      description: "",
      price: "",
      large: "",
      room: "",
      bed: "",
      images: "",
      address: "",
      maps: { lat: 0, lng: 0 },
      properties: []
    };
  }

  componentDidMount() {
    this.getCategory();
    this.getProperty();
  }

  getProperty() {
    Get("property/single/user").then(res => {
      this.setState({ properties: res });
    });
  }
  getCategory() {
    Get("category").then(res => this.setState({ categories: res }));
  }

  myCallback = value => {
    this.setState({
      lat: value.lat,
      lng: value.lng,
      maps: { lat: value.lat, lng: value.lng }
    });
  };

  submitProperty = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
      large: this.state.large,
      room: this.state.room,
      bed: this.state.bed,
      images: this.state.images,
      address: this.state.address,
      maps: this.state.maps,
      host: this.props.user._id
    };
    Post("property", data).then(res => {
      console.log(res);
      this.setState({
        title: "",
        description: "",
        category: "",
        price: "",
        large: "",
        room: "",
        bed: "",
        images: "",
        address: "",
        maps: "",
        properties: [],
        showForm: false,
        showTable: true
      });
      this.props.sendAlert("Property Succefully Added", "success");
      this.getProperty();
    });
  };

  editProperty = (e, id) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
      large: this.state.large,
      room: this.state.room,
      bed: this.state.bed,
      images: this.state.images,
      address: this.state.address,
      maps: this.state.maps,
      host: this.props.user._id
    };
    Put(`property/${id}`, data).then(res => {
      console.log(res);
      this.setState({
        title: "",
        description: "",
        category: "",
        price: "",
        large: "",
        room: "",
        bed: "",
        images: "",
        address: "",
        maps: "",
        showForm: false,
        showTable: true
      });
      this.props.sendAlert("Property Succefully Edited", "success");
      this.getProperty();
    });
  };

  deleteProperty(id) {
    const confirm = window.confirm("Are you sure to delete this Property?");
    if (confirm) {
      Delete(`property/${id}`).then(res => {
        this.setState({
          properties: []
        });
        this.props.sendAlert("Property Succefully Deleted", "success");
        this.getProperty();
      });
      this.getProperty();
    }
  }

  onImageDrop = e => {
    const files = Array.from(e.target.files);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });
    const file = files[0];
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);
    upload.end((err, response) => {
      console.log(response);
      if (err) {
        console.error(err);
      }
      this.setState({ images: response.body.secure_url });
    });
  };

  render() {
    const {
      showForm,
      showTable,
      lat,
      lng,
      showMap,
      images,
      categories,
      title,
      description,
      price,
      large,
      room,
      bed,
      properties,
      maps
    } = this.state;
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            Property
          </h4>
          {showForm ? (
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Property name here"
                    value={title}
                    onChange={e => this.setState({ title: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows={5}
                    value={description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Bed</label>
                  <input
                    type="text"
                    name="bed"
                    className="form-control"
                    placeholder="Property name here"
                    value={bed}
                    onChange={e => this.setState({ bed: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Property Prices"
                    value={price}
                    onChange={e => this.setState({ price: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Large</label>
                  <input
                    type="text"
                    name="large"
                    className="form-control"
                    placeholder="Property Large"
                    value={large}
                    onChange={e => this.setState({ large: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Room Type</label>
                  <select
                    className="form-control"
                    name="category"
                    onChange={e => this.setState({ category: e.target.value })}
                  >
                    {categories.map((item, i) => {
                      return (
                        <option key={i} value={item._id}>
                          {item.category_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Rooms</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Property Prices"
                    value={room}
                    onChange={e => this.setState({ room: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  {images ? (
                    <div className="row">
                      <div className="col-md-12">
                        <img
                          className="img-fluid my-3"
                          alt="poster"
                          src={this.state.images}
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          onClick={() => this.setState({ images: "" })}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label>Images</label>
                      <label
                        className="file-attachment-input"
                        htmlFor="fileAttachmentInput"
                      >
                        Browse your device and upload documents
                        <small className="d-block text-muted">
                          Maximum file size 10MB
                        </small>
                        <input
                          id="fileAttachmentInput"
                          name="file-attachment"
                          onChange={this.onImageDrop}
                          type="file"
                          className="file-attachment-input__label"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Address</label>
                  <Autocomplete
                    className="form-control"
                    onPlaceSelected={place => {
                      const { location } = place.geometry;
                      this.setState({
                        lat: location.lat(),
                        lng: location.lng(),
                        maps: { lat: location.lat(), lng: location.lng() },
                        address: place.formatted_address,
                        showMap: true
                      });
                    }}
                  />
                </div>
              </div>
              {showMap ? (
                <div className="col-md-12 mb-2">
                  <label>MAP</label>
                  <Map
                    center={{ lat: maps.lat, lng: maps.lng }}
                    zoom={10}
                    callback={this.myCallback}
                  />
                </div>
              ) : null}

              <div className="col-md-2 mt-5">
                <button
                  type="button"
                  onClick={this.state.action}
                  className="btn btn-instagram mb-1"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() =>
                this.setState({
                  showForm: !showForm,
                  showTable: !showTable,
                  action: this.submitProperty
                })
              }
              type="button"
              className="btn btn-sm btn-instagram mb-3 ml-auto"
            >
              Add Property
            </button>
          )}
          {showTable ? (
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "8%" }}>
                    #
                  </th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Host</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <span className="btn btn-sm btn-icon btn-soft-secondary rounded-circle mr-2">
                          <span className="btn-icon__inner font-weight-medium">
                            {i + 1}
                          </span>
                        </span>
                      </th>
                      <td className="align-middle">
                        <div className="media align-items-center">
                          <img
                            style={{ maxWidth: 100 }}
                            class="img-fluid "
                            src={item.images}
                            alt="Description"
                          />
                        </div>
                      </td>
                      <td
                        className="align-middle text-truncate"
                        style={{ maxWidth: 200 }}
                      >
                        {item.title}
                      </td>
                      <td className="align-middle">{item.host.firstname}</td>
                      <td className="align-middle text-primary">
                        Rp. {formatRupiah(item.price)}
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() =>
                            this.setState({
                              showForm: true,
                              showTable: false,
                              showMap: true,
                              action: e => this.editProperty(e, item._id),
                              title: item.title,
                              description: item.description,
                              category: item.category,
                              price: item.price,
                              large: item.large,
                              room: item.room,
                              bed: item.bed,
                              images: item.images,
                              address: item.address,
                              maps: item.maps
                            })
                          }
                          type="button"
                          className="btn btn-primary btn-sm mr-2"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => this.deleteProperty(item._id)}
                          type="button"
                          className="btn btn-danger btn-sm mr-2"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div></div>
          )}
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

const mapDispatchToProps = dispatch => {
  return {
    sendAlert: (msg, type) => dispatch(setAlert(msg, type))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
