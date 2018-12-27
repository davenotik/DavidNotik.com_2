import React from "react";
import BlogListModel from '../blog/blog-model';
import NuggetListModel from '../nuggets/nuggets-model';
import AppView from './AppView';
import firebase from "firebase/app";
import 'firebase/firestore';
import * as config from "../../../config/config";
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

const fb = firebase.initializeApp(config.firebase);
const db = fb.firestore();
db.settings({timestampsInSnapshots: true});

export default function AppModel() {
  const blogList = BlogListModel(db);
  const nuggetList = NuggetListModel(db);

  const combined = combineLatest(blogList, nuggetList);

  return combined.pipe(map((components) => <AppView
    components={components}  /> ));
}