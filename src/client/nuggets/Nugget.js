import React from "react";
import renderHTML from 'react-render-html';
import Skeleton from 'react-loading-skeleton';

export default class Nugget extends React.Component {
  render() {
    return (
      <div className="nugget-container">
        <div className="nugget-date">
          May 13th, 2010
        </div>
        <div className="nugget-title">
          {this.props.title || <Skeleton />}
        </div>
        <div className="nugget-body">
          {renderHTML(this.props.body) || <Skeleton count={10}/>}
        </div>
      </div>
    );
  }
}