import React, { Component } from "react";
import BlogPost from "./BlogPost";
import Skeleton from 'react-loading-skeleton';

function SkeletonBlock() {
  return(
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

function BlogList(props) {
  const content =
    (props.posts.length === 0) ? <SkeletonBlock/> : props.posts.map((post) =>
    <BlogPost
      key={post.id}
      title={post.title}
      body={post.body}/>
    );

  return (
    <div className="blog-list">
      {content}
    </div>
  );
}

export default BlogList;