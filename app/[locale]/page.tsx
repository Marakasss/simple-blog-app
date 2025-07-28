import PaginationClient from "@/components/Pagination/Pagination.client";
import { fetchAllPosts } from "@/lib/api";
import React from "react";
import css from "./Posts.module.css";

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
    <div className={css.container}>
      <ul className={css.postList}>
        {posts.map((post) => (
          <li className={css.postCard} key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className={css.pagination}>
        <PaginationClient currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Posts;
