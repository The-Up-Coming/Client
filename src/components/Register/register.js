import React, { Component } from "react";
import './login.css';

class Login extends Component {

  handleChange=event=>{
    this.state={
      :'',
    }
  }


handleSubmit=event=>{
  event.preventDefault();
  this.props.onSearch(this.state.searchText);
}

  render() {
    return <div>
    
    <h2 className="lit">Login</h2>
    <form id="loginForm" onSubmit={this.handleSubmit}>
      <input>
      </input>

      <input>
      </input>
    </form>
    </div>;
  }
}

export default Login;
