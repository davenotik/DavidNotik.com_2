import firebase from "firebase";
import * as config from "../../../config/config";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const fb = firebase.initializeApp(config.firebase);
const db = fb.firestore();
db.settings({timestampsInSnapshots: true});

export const posts = [];

db.collection('posts').get().then(function(snapshot) {
  //TODO: Find a better way.
  snapshot.forEach((post) => {
  var postObject = post.data();
    postObject.id = post.id;
    posts.push(postObject);
  });

  //TODO: Only works hwen I render here. What about rendering before fetch completes?
  const wrapper = document.getElementById("root");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});

export default posts;