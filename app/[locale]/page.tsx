import PaginationClient from "@/components/Pagination/Pagination.client";
import { fetchAllPosts } from "@/lib/api";
import React from "react";

interface SearchParams {
  searchParams?: Promise<{
    page?: string;
  }>;
}

const Posts = async ({ searchParams }: SearchParams) => {
  const params = (await searchParams) ?? { page: 1 };
  const currentPage = Number(params.page || 1);
  const { data: posts, totalPages } = await fetchAllPosts(currentPage);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <PaginationClient currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Posts;
