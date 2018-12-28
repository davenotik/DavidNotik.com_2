import React from "react";
import BlogPost from "./BlogPost";
import SkeletonBlock from "../skeleton/SkeletonBlock";

export default class BlogListView extends React.Component {
  render() {
    const content = this.props.items.length === 0
      ? <SkeletonBlock/>
      : this.props.items.map(post =>
        <BlogPost
          key={post.id}
          title={post.title}
          body={post.body}
        />
      );

    return (
      <div className="blog-list">
        {content}
      </div>
    );
  }
}
