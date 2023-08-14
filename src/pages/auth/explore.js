import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";

export const Explore = () => {
  const { postsData } = useContext(PostContext);
  return (
    <div>
      {postsData.map((post) => {
        console.log(post);
        return (
          <div key={post.id}>
            <h1>{post.content}</h1>
            {post.name}
          </div>
        );
      })}
    </div>
  );
};
