"use client";

import { useParams, useRouter } from "next/navigation";
import Pagination from "./Pagination";

interface PaginationClientProps {
  totalPages: number;
  currentPage: number;
}

const PaginationClient = ({
  totalPages,
  currentPage,
}: PaginationClientProps) => {
  const router = useRouter();
  const { locale } = useParams();

  const handlePageChange = (page: number) => {
    router.push(`/${locale}/?page=${page}`);
  };

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default PaginationClient;
