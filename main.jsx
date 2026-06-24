import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
//import './index.css'
//import './app.css';
import './routes/App.css';
//import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost,{createPostAction} from './components/CreatePost.jsx';
import App from './routes/App.jsx';
import PostList, {postLoader} from "./components/PostList.jsx";

const router=createBrowserRouter([
  {path:"/",
     element:<App/>,
      children:[
      {path:"/", element: <PostList/>, loader:postLoader,action:createPostAction},
    {path:"/create-post", element: <CreatePost/>, action:createPostAction},],},
  // react-router
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
