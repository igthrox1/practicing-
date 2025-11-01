import { useState } from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import Footer from "./components/footer";
import Header from "./components/header";
import PostList from "./components/postList";
import Sidebar from "./components/sidebars";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab , setSelectedTab] = useState("Home");
  
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
