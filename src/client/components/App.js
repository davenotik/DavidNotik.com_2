import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import css from '../../../static/app.css';
import BlogList from "./BlogList";
import firebase from 'firebase';
import 'firebase/firestore';
import {firebase as fb} from "../../../config/config";

//Initialize Firebase
const firebaseApp = firebase.initializeApp(fb);
const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true});

let posts = [];

db.collection('posts').get().then(function(snapshot) {
  snapshot.forEach((post) => {
    posts.push(post.data());
  });

  const wrapper = document.getElementById("root");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-container">
        <Header/>
        <BlogList posts={posts}/>
      </div>
    );
  }
}

export default App;