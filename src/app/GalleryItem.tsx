import Image from "next/image";
import { SearchResult } from "@/lib/search-result";

export const GalleryItem = ({ item }: { item: SearchResult }) => {
  return (
    <div className="relative aspect-square">
      <Image
        alt={item.alt_description}
        className="object-cover"
        fill
        src={item.urls.regular}
      />
    </div>
  );
};
