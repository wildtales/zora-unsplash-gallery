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

export const PaginationBar = ({
  totalPages,
  currentPage,
  setPage,
}: {
  totalPages?: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const pageLowerBound = Math.max(currentPage - 1, 1);

  const pages = [pageLowerBound, pageLowerBound + 1, pageLowerBound + 2];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          aria-disabled={currentPage === 1}
          className={currentPage === 1 ? "cursor-not-allowed" : ""}
        >
          <PaginationPrevious
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          />
        </PaginationItem>
        {pages.map((pageItem) => (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === pageItem}
              onClick={() => setPage(pageItem)}
            >
              {pageItem}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "cursor-not-allowed" : ""}
            onClick={() => setPage((prevPage) => prevPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
