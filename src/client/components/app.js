import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import css from '../../../static/app.css';
import Entry from "./entry";
import firebase from 'firebase';
import 'firebase/firestore';
import {firebase as fb} from "../../../config/config";

//Initialize Firebase
const firebaseApp = firebase.initializeApp(fb);
const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true});

// var posts = db.collection('posts').get().then(function(posts) {
//   posts.forEach(function(post) {
//     console.log(post.data());
//   });
// });

db.collection("posts").onSnapshot(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});


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
        <Entry/>
        <Entry/>
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;