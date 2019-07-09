import React, { Component } from "react";
import axios from "axios";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_SECRET_ID}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_SECRET_ID}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ loading: false, users: [] });
  };
  setAlert = (msg,type) => {
    this.setState({alert: {msg,type}})
    setTimeout(() => {
      this.setState({alert:null})
    }, 5000);
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert = {this.setAlert}
          />
          <User loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
