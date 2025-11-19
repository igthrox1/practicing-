import { useRef , useContext } from "react";
import { PostList } from "../store/post-list-store"


function CreatePost() {
  
  const { addPost } = useContext(PostList);
  
  const userIdElement    =  useRef();  
  const titleElement = useRef();  
  const bodyElement = useRef();  
  const reactionsElement = useRef();  
  const tagsElement = useRef();  

  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/);

    addPost(userId, title, body, reactions, tags);

  }

  return (
    <>
      <form className="create-Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your user Id Here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="enter you user id"
            ref={userIdElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="how are you feeling today...."
            ref={titleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us More About it...."
            rows="6"
            ref={bodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            NUmber of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
            rows="6"
            ref={reactionsElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Relevant Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="enter the tags for reach"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;