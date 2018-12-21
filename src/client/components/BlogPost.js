import React, { Component } from "react";

class BlogPost extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="blog-post-container">
        <div className="blog-post-date">
          May 13th, 2010
        </div>
        <div className="blog-post-title">
          {this.props.title}
        </div>
        <div className="blog-post-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default BlogPost;