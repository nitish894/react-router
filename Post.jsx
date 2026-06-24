import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({post}) => {
const {deletePost} =useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
           onClick={()=>deletePost(post.id)}>
            <AiFillDelete />
            </span></h5>
        <p className="card-text">
         {post.body}
        </p>
        {post.tags.map((tags)=><span key={tags}className="badge text-bg-primary hastag">{tags}</span>)}
        <div className="alert alert-success reaction" role="alert">
           this post reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;