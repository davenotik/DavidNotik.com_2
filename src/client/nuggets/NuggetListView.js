import React from "react";
import Nugget from "./Nugget";
import Skeleton from 'react-loading-skeleton';

export default class NuggetListView extends React.Component {
  render() {
    const content = this.props.items.length === 0
      ? <SkeletonBlock/>
      : this.props.items.map(item =>
        <Nugget
          key={item.id}
          title={item.title}
          body={item.body}
        />
      );

    return (
      <div className="nugget-list">
        {content}
      </div>
    );
  }
}

function SkeletonBlock() {
  return (
    <div>
      <br/><br/>
      <Skeleton count={10}/>
      <br/><br/>
      <Skeleton count={5}/>
      <br/><br/>
      <Skeleton count={10}/>
    </div>
  );
}
