import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    if (
      this.state.username === "user1234" &&
      this.state.password === "password1234"
    ) {
      alert("Login Successful");
      const { username, password } = this.state;
    }

    event.preventDefault();
  }
  render() {
    console.log(this.state);
    return (
      <div className="block">
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter: user1234"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter: password1234"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
