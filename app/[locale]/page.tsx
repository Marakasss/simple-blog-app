import PaginationClient from "@/components/Pagination/Pagination.client";
import { fetchAllPosts } from "@/lib/api";
import React from "react";
import css from "./Posts.module.css";
import Link from "next/link";
import { getDictionary } from "@/language/dictionaries";
import { capitalize } from "@/lib/helpers";
import { Metadata } from "next";

//Props-------------------------------------------

interface PostsParamsProps {
  searchParams?: Promise<{
    page?: string;
  }>;
  params: Promise<{
    locale: "en" | "uk";
  }>;
}

//Metadata----------------------------------------

export const generateMetadata = async ({
  params,
}: PostsParamsProps): Promise<Metadata> => {
  const { locale } = await params;
  const {
    metadata: { description },
  } = await getDictionary(locale);
  const descr = "Тest task for participation in a volunteer project";

  return {
    title: "SimpleBlog",
    description: description || descr,
    openGraph: {
      title: "SimpleBlog",
      description: description || descr,
      url: `https://simple-blog-app-zeta.vercel.app/${locale}`,
      siteName: "SimpleBlog",
      images: [
        {
          url: "https://simple-blog-app-zeta.vercel.app/meta-pic.png",
          width: 1200,
          height: 630,
          alt: "SimpleBlog",
        },
      ],

      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SimpleBlog",
      description: description || descr,
      images: ["https://simple-blog-app-zeta.vercel.app/meta-pic.png"],
    },
  };
};

// Posts component----------------------------------------

const Posts = async ({ searchParams, params }: PostsParamsProps) => {
  const pageParams = (await searchParams) ?? { page: 1 };
  const currentPage = Number(pageParams.page || 1);
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { data: posts, totalPages } = await fetchAllPosts(currentPage, 20);

  return (
    <main>
      <div className={css.container}>
        <ul className={css.postList}>
          {posts.map((post) => (
            <li key={post.id} className={css.postCard}>
              <p>{capitalize(post.title)}</p>
              <Link
                className={css.buttonLink}
                key={post.id}
                href={`/${locale}/posts/${post.id}`}
              >
                <span>{dict.more}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={css.pagination}>
          <PaginationClient currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
};

export default Posts;
