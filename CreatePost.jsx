import { Form, redirect } from "react-router-dom";


const CreatePost = () => {
//const { addPost }=useContext(PostList);
//const navigate =useNavigate();

  return (
    <Form method="POST"className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
           Enter your UserId here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="your userId..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
           post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="how wre you felling today..."
        />
      </div>
       <div className="mb-3">
        <label htmlFor="body" className="form-label">
           post Content
        </label>
        <textarea
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="how wre you felling today..."
          rows="3"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
           Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reaction"
          placeholder="how many people reacted in this post..."
        />
      </div>
       <div className="mb-3">
        <label htmlFor="tags" className="form-label">
           enter you hastage tags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="please enter your tags using space..."
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data){
  const fromData= await data.request.formData();
  const postData = Object.fromEntries(fromData);
  postData.tags=postData.tags.split(" ");
  //console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData),
  })
       .then(res => res.json())
       .then(post=>{
        //addPost=(post);
       console.log(post);
      });
      return redirect ("/");

};

export default CreatePost;