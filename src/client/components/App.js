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

// const model = () => {
  let posts = [];
  db.collection('posts').get().then(function(snapshot) {
    //TODO: React throws "Objects are not valid as a React child"
    snapshot.forEach(function(doc) {
      posts.push(doc.data());
    });

    console.log(posts);

    const wrapper = document.getElementById("root");
    wrapper ? ReactDOM.render(<App />, wrapper) : false;
  });
// }

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