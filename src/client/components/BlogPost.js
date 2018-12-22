import React, { Component } from "react";
import Skeleton from 'react-loading-skeleton';

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
          {this.props.title || <Skeleton />}
        </div>
        <div className="blog-post-body">
          {this.props.body || <Skeleton count={10}/>}
        </div>
      </div>
    );
  }
}

export default BlogPost;