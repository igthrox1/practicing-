import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList ];
  }
  return newPostList;
};

const PostListProvider = ({children}) => {
  const [postList, DispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  
  const addPost = (userId, title, body, reactions, tags) => {
    DispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title:  title ,
        body:  body ,
        reactions: reactions ,
        userId: userId ,
        tags:  tags ,
      },
    });
  };

  const deletePost = (postId) => {
    DispatchPostList({
      type:"DELETE_POST",
      payload:{postId},
    })
  }

  

  return (
    <PostList.Provider value={{ postList , addPost, deletePost }}>
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

