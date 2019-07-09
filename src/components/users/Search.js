import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.text === ''){
        this.props.setAlert('Please Enter Something','danger')
    }else{
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
    }
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              placeholder="Search Users...."
              className="form-control"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
