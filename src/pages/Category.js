import React, { Component } from "react";
import { connect } from "react-redux";
import { setAlert } from "../actions";
import { Get, Post, Delete, Put } from "../config";
import LayoutAccount from "../component/LayoutAccount";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showTable: true,
      showMap: false,
      action: null,
      category_name: "",
      category_description: "",
      categories: []
    };
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    this.setState({
      categories: await Get("category")
    });
  }

  handleAddCategory(event) {
    const body = {
      category_name: this.state.category_name,
      category_description: this.state.category_description
    };
    Post("category", body)
      .then(res => {
        this.setState({
          category_name: "",
          category_description: "",
          categories: [],
          showForm: false,
          showTable: true
        });
        this.props.sendAlert("Category Succefully Added", "success");
        this.getCategories();
      })
      .catch(err => {
        //this.props.sendAlert(err, "error");
      });
    event.preventDefault();
  }

  editCategory(e, id) {
    const body = {
      category_name: this.state.category_name,
      category_description: this.state.category_description
    };
    Put(`category/${id}`, body).then(res => {
      this.setState({
        category_name: "",
        category_description: "",
        categories: [],
        showForm: false,
        showTable: true
      });
      this.props.sendAlert("Category Succefully Edited", "success");
      this.getCategories();
    });
    e.preventDefault();
  }

  deleteCategory(id) {
    const confirm = window.confirm("Are you sure to delete this Category?");
    if (confirm) {
      Delete(`category/${id}`).then(res => {
        this.setState({
          categories: []
        });
        this.props.sendAlert("Category Succefully Deleted", "success");
        this.getCategories();
      });
      this.getCategories();
    }
  }

  render() {
    const {
      showForm,
      showTable,
      categories,
      category_name,
      category_description
    } = this.state;
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            Category
          </h4>
          {showForm ? (
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    type="text"
                    name="category_name"
                    className="form-control"
                    placeholder="Category Name"
                    value={category_name}
                    onChange={e =>
                      this.setState({ category_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Category Description
                  </label>
                  <textarea
                    className="form-control"
                    name="category_description"
                    value={category_description}
                    rows={5}
                    onChange={e =>
                      this.setState({ category_description: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <button
                  onClick={this.state.action}
                  type="button"
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
                  action: this.handleAddCategory
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
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total Items</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, i) => {
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
                        <div className="media align-items-center text-capitalize">
                          {item.category_name}
                        </div>
                      </td>
                      <td className="align-middle text-capitalize">
                        {item.category_description}
                      </td>
                      <td className="align-middle text-secondary">
                        {item.property.length}
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() =>
                            this.setState({
                              showForm: true,
                              showTable: false,
                              action: e => this.editCategory(e, item._id),
                              category_name: item.category_name,
                              category_description: item.category_description
                            })
                          }
                          type="button"
                          className="btn btn-primary btn-sm mr-2"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => this.deleteCategory(item._id)}
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

const mapDispatchToProps = dispatch => {
  return {
    sendAlert: (msg, type) => dispatch(setAlert(msg, type))
  };
};

export default connect(null, mapDispatchToProps)(Category);
