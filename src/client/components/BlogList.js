import React, { Component } from "react";
import BlogPost from "./BlogPost";
import Skeleton from 'react-loading-skeleton';

function BlogList(props) {
  const content =
    (props.posts.length === 0) ? <Skeleton count={10}/> : props.posts.map((post) =>
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