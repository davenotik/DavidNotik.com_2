import React from 'react'
import NuggetListView from './NuggetListView'
import { from } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { snapshotToObjectList } from '../util/firebase-util'

export default function NuggetModel(db) {
  const items = from(db.collection('nuggets').get()) // from() creates an Rx observable from the given promise/observable parameter.
    .pipe( // Pipe allows you to pipe operations on the observable, kind of like unix pipes: posts | mapping | delay | foo
      map(snapshotToObjectList), // Turn those 'nasty' snapshot things into nice [{title, ...}, ...] form.
      delay(2000), // Add some delay to see skeletons.
      startWith([]) // Initial value for posts observable.
    );

  return items.pipe(
    map(items => <NuggetListView items={items} />)
  );
};