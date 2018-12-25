import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import BlogList from "./BlogList";
import {posts} from "./BlogListModel";
import css from '../../../static/app.css';

function App() {
  return (
    <div className="main-container">
      <Header/>
      <BlogList posts={posts}/>
    </div>
  );
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;