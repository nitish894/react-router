import Post from "./Post";
import { useContext, useEffect } from "react";
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const PostListComponent = () => {
  const postList=useLoaderData();
        
  return (
    <>
   
    {
        postList.length === 0 && <WelcomeMessage/>
    }
      { postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = ()=>{
  return fetch('https://dummyjson.com/posts')//fetching from the server..... thid methd are used to fetch data from the server....
      .then(res => res.json())
        .then(data=>{
          return data.posts;
        });
}

export default PostListComponent;