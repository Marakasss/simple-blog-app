import { fetchAllPostsIds, fetchPostsById } from "@/lib/api";
import React from "react";
import css from "./SinglePost.module.css";
import { capitalize } from "@/lib/helpers";
import { Metadata } from "next";

interface SinglePostProps {
  params: Promise<{
    id: string;
    locale: "en" | "uk";
  }>;
}

//Metadata----------------------------------------

export const generateMetadata = async ({
  params,
}: SinglePostProps): Promise<Metadata> => {
  const { id, locale } = await params;
  const { title, body: description } = await fetchPostsById(Number(id));

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://simple-blog-app-zeta.vercel.app/${locale}/posts/${id}`,
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
      title,
      description,
      images: ["https://simple-blog-app-zeta.vercel.app/meta-pic.png"],
    },
  };
};

//generateStaticParams func for SSG-----------------

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const idsArr = await fetchAllPostsIds();
  return idsArr.map((id) => ({ id }));
}

//SinglePost----------------------------------------

const SinglePost = async ({ params }: SinglePostProps) => {
  const { id } = await params;
  const { title, body } = await fetchPostsById(Number(id));

  return (
    <section className={css.singlePostSec}>
      <div className={css.postCard}>
        <h2 className={css.title}>{capitalize(title)}</h2>
        <p className={css.post}>{capitalize(body)}</p>
      </div>
    </section>
  );
};

export default SinglePost;
