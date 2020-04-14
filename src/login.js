import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <br />
          <button> Login </button>
        </form>
      </div>
    );
  }
}

export default Login;
