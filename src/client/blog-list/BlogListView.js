import React from "react";
import BlogPost from "./BlogPost";
import Skeleton from 'react-loading-skeleton';

export default class BlogListView extends React.Component {
  render() {
    const content = this.props.posts.length === 0
      ? <SkeletonBlock/>
      : this.props.posts.map(post =>
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
