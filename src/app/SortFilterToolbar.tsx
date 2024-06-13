import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Color, FilterState, OrderBy } from "@/lib/filters";
import { toCapitalizedWords } from "@/lib/formatters";
import { ChevronDown } from "lucide-react";

export const SortFilterToolbar = ({
  filters,
  updateFilters,
}: {
  filters: FilterState;
  updateFilters: (key: keyof FilterState, value: OrderBy | Color) => void;
}) => {
  return (
    <div className="flex justify-end mt-4 gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex items-center">
            Color: {filters.color ? toCapitalizedWords(filters.color) : ""}
            <ChevronDown className="h-4 w-4 ml-1" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.values(Color).map((value) => (
            <DropdownMenuCheckboxItem
              key={value}
              checked={filters.color === value}
              onClick={() => updateFilters("color", value)}
            >
              {toCapitalizedWords(value)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex items-center">
            Sort By: {toCapitalizedWords(filters.orderBy)}
            <ChevronDown className="h-4 w-4 ml-1" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.values(OrderBy).map((value) => (
            <DropdownMenuCheckboxItem
              key={value}
              checked={filters.orderBy === value}
              onClick={() => updateFilters("orderBy", value)}
            >
              {toCapitalizedWords(value)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
