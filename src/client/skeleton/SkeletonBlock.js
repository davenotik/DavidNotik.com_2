import React from "react";
import Skeleton from "react-loading-skeleton";

export default class SkeletonBlock extends React.Component {
  render() {
    return (
      <div className="skeleton-block">
        <Skeleton count={1} width={300}/>
        <br/><br/>
        <Skeleton count={5}/>
        <Skeleton count={1} width={100}/>
      </div>
    );
  }
}