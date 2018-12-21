import React, { Component } from "react";
import BlogPost from "./BlogPost";
import firebase from "firebase";
import {firebase as fb} from "../../../config/config";

class BlogList extends Component {
  render() {
    const rows = [];

    this.props.posts.forEach((post) => {
      rows.push(
        <BlogPost
          key={post.id}
          title={post.title}
          body={post.body} />
      );
    });

    return (
      <div className="blog-list">
        {rows}
      </div>
    );
  }
}

export default BlogList;