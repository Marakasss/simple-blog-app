import PaginationClient from "@/components/Pagination/Pagination.client";
import { fetchAllPosts } from "@/lib/api";
import React from "react";
import css from "./Posts.module.css";
import Link from "next/link";

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
          <li key={post.id} className={css.postCard}>
            <p>{post.title}</p>
            <Link className={css.buttonLink} key={post.id} href={"/"}>
              <span>More</span>
            </Link>
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
