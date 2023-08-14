import { createContext, useEffect, useState } from "react";
import { getAllPostsService } from "../services/postServices";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postsData, setPostsData] = useState([]);

  const getPostHandler = async () => {
    try {
      const response = getAllPostsService();
      setPostsData((await response).data.posts);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPostHandler();
  }, []);
  return (
    <PostContext.Provider value={{ getPostHandler, postsData }}>
      {children}
    </PostContext.Provider>
  );
};
