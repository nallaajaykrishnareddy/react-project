import React, { useState,useContext } from "react";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('')
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter Something", "danger");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length >0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
