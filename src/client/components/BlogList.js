import React, { Component } from "react";
import BlogPost from "./BlogPost";
import firebase from "firebase";
import {firebase as fb} from "../../../config/config";

class BlogList extends Component {
  render() {

    const content = this.props.posts.map((post) =>
      <BlogPost
        key={post.id}
        title={post.title}
        body={post.body} />
    );

    return (
      <div className="blog-list">
        {content}
      </div>
    );
  }
}

export default BlogList;