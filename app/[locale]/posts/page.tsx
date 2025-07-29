import { fetchAllPostsIds, fetchPostsById } from "@/lib/api";
import React from "react";

interface SinglePostProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const idsArr = await fetchAllPostsIds();
  return idsArr.map((id) => ({ id }));
}

const SinglePost = async ({ params }: SinglePostProps) => {
  const { id } = await params;
  console.log(params);

  const singlePost = await fetchPostsById(Number(id));
  console.log(singlePost);

  return (
    <div>
      <h2>{singlePost.title}</h2>
      <p>{singlePost.body}</p>
    </div>
  );
};

export default SinglePost;
