import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [PostsData] = useState(["Data From The PostsContext"]);
  return (
    <PostContext.Provider value={{ PostsData }}>
      {children}
    </PostContext.Provider>
  );
};
