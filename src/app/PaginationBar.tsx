import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";

// TODO: Possible to add the page to the URL so user can always reference back
// to the page in question (but have to save the parameters of the query in the URL as well)

// Exported for testing
export const getPageNumbers = (currentPage: number, totalPages?: number) => {
  const pageLowerBound = Math.max(currentPage - 1, 1);

  if (pageLowerBound === totalPages) {
    return [pageLowerBound];
  }

  const pages = [pageLowerBound, pageLowerBound + 1];

  if (totalPages === undefined || pageLowerBound + 2 <= totalPages) {
    pages.push(pageLowerBound + 2);
  }

  return pages;
};

export const PaginationBar = ({
  currentPage,
  totalPages,
  setPage,
}: {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages?: number;
}) => {
  const pages = getPageNumbers(currentPage, totalPages);
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    if (!isLastPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={isFirstPage}
            className={isFirstPage ? "cursor-not-allowed" : "cursor-pointer"}
            onClick={goToPreviousPage}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page} data-testid="page-count">
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => setPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            aria-disabled={isLastPage}
            className={isLastPage ? "cursor-not-allowed" : "cursor-pointer"}
            onClick={goToNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
