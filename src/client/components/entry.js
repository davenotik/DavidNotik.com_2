import React, { Component } from "react";

class Entry extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="entry-container">
        <div className="entry-date">
          December 15th, 2018
        </div>
        <div className="entry-title">
          Lorem ipsum dolor sit amet
        </div>
        <div className="entry-body">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    );
  }
}

export default Entry;