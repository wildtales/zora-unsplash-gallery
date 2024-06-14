import axios from "axios";
import { Color, FilterState } from "@/lib/filters";
import { SearchResult } from "@/lib/search-result";

const ITEMS_PER_PAGE = 9;
const SEARCH_PHOTOS_URL = "https://api.unsplash.com/search/photos";

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  total_pages: number;
}

// TODO: Move API call to server side, environment variable should not be exposed on client side
export const searchPhotos = async (
  query: string,
  page: number,
  { color, orderBy: order_by }: FilterState
) => {
  const response = await axios.get(SEARCH_PHOTOS_URL, {
    params: {
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
      color: color === Color.ALL ? undefined : color,
      order_by,
      page,
      per_page: ITEMS_PER_PAGE,
      query,
    },
  });

  return response?.data as SearchResponse;
};
