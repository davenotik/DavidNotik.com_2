import React from "react";
import BlogListModel from '../blog-list/blog-list-model'
import AppView from './AppView'
import firebase from "firebase/app";
import 'firebase/firestore'
import * as config from "../../../config/config";
import { map } from 'rxjs/operators';

const fb = firebase.initializeApp(config.firebase);
const db = fb.firestore();
db.settings({timestampsInSnapshots: true});

export default function AppModel() {
  const blogList = BlogListModel(db);

  return blogList.pipe(
    map(blogList => <AppView blogList={blogList} />)
  );
}