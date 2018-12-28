import React from "react";
import Nugget from "./Nugget";
import SkeletonBlock from "../skeleton/SkeletonBlock";

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
