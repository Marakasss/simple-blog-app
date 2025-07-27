import Pagination from "@/components/Pagination/Pagination";
import { fetchAllPosts } from "@/lib/api";
import React from "react";

const Posts = async () => {
  const response = await fetchAllPosts();

  const data = response.data;

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default Posts;
