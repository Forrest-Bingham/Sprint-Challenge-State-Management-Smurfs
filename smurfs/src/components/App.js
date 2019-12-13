import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfsForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to Smurfs</h2>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
