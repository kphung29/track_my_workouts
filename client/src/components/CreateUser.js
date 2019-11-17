/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/require-render-return */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username } = this.state;

    const user = {
      username
    };

    console.log(user);

    axios
      .post("http://localhost:4000/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      username: ""
    });
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
