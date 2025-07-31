import { fetchAllPostsIds, fetchPostsById } from "@/lib/api";
import React from "react";
import css from "./SinglePost.module.css";
import { capitalize } from "@/lib/helpers";

interface SinglePostProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const idsArr = await fetchAllPostsIds();
  return idsArr.map((id) => ({ id }));
}

const SinglePost = async ({ params }: SinglePostProps) => {
  const { id } = await params;
  const singlePost = await fetchPostsById(Number(id));

  return (
    <section className={css.singlePostSec}>
      <div className={css.postCard}>
        <h2 className={css.title}>{capitalize(singlePost.title)}</h2>
        <p className={css.post}>{capitalize(singlePost.body)}</p>
      </div>
    </section>
  );
};

export default SinglePost;
