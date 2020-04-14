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
    event.preventDefault();
    const { username, password } = this.state;
    const userNameCheck = /^[A-Z0-9]+$/i.test(username);
    const passwordCheckReg = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15})"
    );
    const passwordCheck = passwordCheckReg.test(password);
    if (userNameCheck && passwordCheck) {
      if (username === "user1234" && password === "Password@1") {
        alert("Login Successful");
        this.props.history.push("/dashboard");
      }
    } else {
      alert("Login Unsuccessful");
    }
  }
  render() {
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
              placeholder="Enter: Password@1"
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
