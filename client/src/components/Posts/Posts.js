import React from "react";
import Post from "./Post/Post.js";

//import custom components and files here
import useStyles from "./styles.js";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
