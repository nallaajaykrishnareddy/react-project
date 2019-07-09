import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState('')
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            placeholder="Search Users...."
            className="form-control"
            value={text}
            onChange={handleChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
