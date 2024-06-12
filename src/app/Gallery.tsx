"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { PaginationBar } from "./PaginationBar";
import { SortFilterToolbar } from "./SortFilterToolbar";
import { Color, OrderBy } from "@/lib/filters";
import { SearchResponse } from "@/lib/search-result";
import { GalleryItem } from "./GalleryItem";
import { Input } from "@/components/ui/input";

interface FilterState {
  orderBy: OrderBy;
  color: Color;
}

// TODO: Move API call to server side, environment variable should not be exposed
const searchPhotos = async (
  query: string,
  page: number,
  { color, orderBy: order_by }: FilterState
) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
      color: color === Color.all ? undefined : color,
      order_by,
      page,
      per_page: 9,
      query,
    },
  });

  return response?.data as SearchResponse;
};

const LoadingGallery = () => {
  return (
    <>
      <div className="py-2" />
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array(9)
          .fill(1)
          .map((_elem, idx) => (
            <Skeleton key={idx} className="w-60 h-60" />
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
    color: Color.all,
  });

  const { data, error, isLoading, status } = useQuery({
    queryKey: ["search", searchInput, page, filters],
    queryFn: () => searchPhotos(searchInput, page, filters),
    enabled: !!searchInput,
  });

  const { results, total_pages: totalPages } = data || {};

  const items = results || [];

  const handleInputChange = async (e: any) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
      setPage(1);
    }
  };

  const updateFilters = (key: "orderBy" | "color", value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

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
        <div>There was an issue fetching photos.</div>
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
