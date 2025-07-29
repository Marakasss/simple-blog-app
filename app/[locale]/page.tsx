import PaginationClient from "@/components/Pagination/Pagination.client";
import { fetchAllPosts, fetchAllPostsIds } from "@/lib/api";
import React from "react";
import css from "./Posts.module.css";
import Link from "next/link";

interface PostsParamsProps {
  searchParams?: Promise<{
    page?: string;
  }>;
  params: Promise<{
    locale: "en" | "uk";
  }>;
}

const Posts = async ({ searchParams, params }: PostsParamsProps) => {
  const pageParams = (await searchParams) ?? { page: 1 };
  const currentPage = Number(pageParams.page || 1);
  const { locale } = await params;
  const { data: posts, totalPages } = await fetchAllPosts(currentPage, 20);

  return (
    <div className={css.container}>
      <ul className={css.postList}>
        {posts.map((post) => (
          <li key={post.id} className={css.postCard}>
            <p>{post.title}</p>
            <Link
              className={css.buttonLink}
              key={post.id}
              href={`/${locale}/posts/${post.id}`}
            >
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
