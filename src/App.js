import React from "react";
import "./App.css";
import Register from "./components/Register/register";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Switch />

        <Route path="/reg" exact>
          <Register />
        </Route>
      </Router>
    );
  }
}

export default App;
