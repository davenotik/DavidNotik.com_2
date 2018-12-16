import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import css from '../../../static/app.css';
import Entry from "./entry";


class App extends Component {
  constructor() {
    super();

    this.state = {
      whatever: ""
    };
  }

  render() {
    return (
      <div className="main-container">
        <Header/>
        <Entry/>
        <Entry/>
        <Entry/>
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;