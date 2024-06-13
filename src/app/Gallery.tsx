"use client";

import { useQuery } from "@tanstack/react-query";
import { KeyboardEvent, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { PaginationBar } from "./PaginationBar";
import { SortFilterToolbar } from "./SortFilterToolbar";
import { Color, FilterState, OrderBy } from "@/lib/filters";
import { GalleryItem } from "./GalleryItem";
import { Input } from "@/components/ui/input";
import { searchPhotos } from "./api/search-photos";

const LoadingGallery = () => {
  return (
    <>
      <div className="py-2" />
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array(9)
          .fill(1)
          .map((_elem, idx) => (
            <Skeleton key={idx} className="w-full h-[250px]" />
          ))}
      </div>
    </>
  );
};

export const Gallery = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    orderBy: OrderBy.LATEST,
    color: Color.ALL,
  });

  const { data, error, isLoading, status } = useQuery({
    queryKey: ["search", searchInput, page, filters],
    queryFn: () => searchPhotos(searchInput, page, filters),
    enabled: !!searchInput,
  });

  const { results, total_pages: totalPages } = data || {};

  const items = results || [];

  const handleInputChange = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target) {
      const target = e.target as HTMLButtonElement;

      if (e.key === "Enter") {
        setSearchInput(target.value);
        setPage(1);
      }
    }
  };

  const updateFilters = (key: keyof FilterState, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters: FilterState = { ...prevFilters };

      (updatedFilters as any)[key] = value;

      setPage(1);

      return updatedFilters;
    });
  };

  return (
    <div className="w-full">
      <Input placeholder="Search photos..." onKeyDown={handleInputChange} />

      <SortFilterToolbar updateFilters={updateFilters} filters={filters} />

      {error ? (
        <div>There was an issue fetching photos</div>
      ) : isLoading ? (
        <LoadingGallery />
      ) : items.length === 0 && status === "success" ? (
        <p>No items matched your query.</p>
      ) : (
        <>
          <div className="py-2" />

          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      <div className="py-4" />

      <PaginationBar
        currentPage={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};
