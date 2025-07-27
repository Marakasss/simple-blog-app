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
  page = 1,
  limit = 20
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
