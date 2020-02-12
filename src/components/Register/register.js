import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.regUser(this.state);
  };

  render() {
    return (
      <div>
        
        <div className="container">
        <h2 className="reg">Register</h2>
        <div className="reg-card">
          <form className="regForm" onSubmit={this.onSubmit}>
            <p>First Name</p>
            <input
              type="text"
              name="fname"
              id="fname"
              value={this.state.fname}
              onChange={this.handleChange}
            ></input>
<p>Email</p>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
<p>Password</p>
            <input
              type="text"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>

<p>Password></p>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            ></input>

            <button>Submit</button>
            <button>Log In</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Register;
