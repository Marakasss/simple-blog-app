import { Post } from "@/types/types";
import axios from "axios";

interface PostResponse {
  data: Post[];
  totalPages: number;
}

const phApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchAllPosts = async (
  page: number = 1,
  limit: number = 10
): Promise<PostResponse> => {
  const response = await phApi.get<Post[]>("/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  const totalCount = Number(response.headers["x-total-count"] || 0);
  return {
    data: response.data,
    totalPages: Math.ceil(totalCount / limit),
  };
};

export const fetchPostsById = async (id: number): Promise<Post> => {
  const response = await phApi.get<Post>(`/posts/${id}`);
  return response.data;
};

export const fetchAllPostsIds = async (): Promise<string[]> => {
  const response = await phApi.get<Post[]>("/posts");
  const idsArr = response.data.map((post: Post) => post.id.toString());
  return idsArr;
};
