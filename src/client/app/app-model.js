import React from "react";
import BlogListModel from '../blog/blog-model';
import NuggetListModel from '../nuggets/nuggets-model';
import AppView from './AppView';
import firebase from "firebase/app";
import 'firebase/firestore';
import * as config from "../../../config/config";
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { combineTemplate } from '../util/rx-util'

const fb = firebase.initializeApp(config.firebase);
const db = fb.firestore();
db.settings({timestampsInSnapshots: true});

const AppViewFactory = React.createFactory(AppView)

export default function AppModel() {
  const blogList = BlogListModel(db);
  const nuggetList = NuggetListModel(db);

  return combineTemplate({
    asd: 5,
    anotherThing: 'asd',
    blogList,
    nuggetList
  }).pipe(
    map(props => AppViewFactory(props))
  );
}
