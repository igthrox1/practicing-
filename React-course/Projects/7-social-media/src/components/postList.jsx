import { useContext } from "react";
import Post from "./post.jsx";
import { PostList as PostListData } from "../store/post-list-store.jsx";

function PostList() {
    const { postList } = useContext(PostListData);
    console.log(postList);
    
    return (
      <>
        {postList.map((post) => <Post key = {post.id}  post = {post}/> )}
      </>
    );
}

export default PostList;