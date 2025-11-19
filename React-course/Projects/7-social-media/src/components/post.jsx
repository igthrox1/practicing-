import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card" >
        <img className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
              <MdDeleteForever />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tags) => (
            <span key={tags} className="text-bg-primary">{tags}</span>
          ))}
          <div class="alert alert-success alert" role="alert">
            This Post has been reacted by {post.reactions} people!
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
