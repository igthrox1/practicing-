import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({children}) => {
  const [postList, DispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  
  const addPost = () => {

  }

  const deletePost = () => {

  }

  

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "hi friends , today iam going to mumbai for wating my holidays with my family and having fun there",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "travel"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki mehanat ke baad finanly pass ho gaya hu , ab to party banthi hai bhai",
    reactions: 15,
    userId: "user-12",
    tags: ["success", 'party','celebrations'],
  },
];


export default PostListProvider;

