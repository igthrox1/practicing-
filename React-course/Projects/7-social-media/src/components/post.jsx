import { MdDeleteForever } from "react-icons/md";

function Post({ post }) {
  return (
    <>
      <div className="card post-card" >
        <img className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDeleteForever />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tags) => (
            <span className="text-bg-primary">{tags}</span>
          ))}
          <div class="alert alert-success alert" role="alert">
            A simple success alert—check it out!
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
