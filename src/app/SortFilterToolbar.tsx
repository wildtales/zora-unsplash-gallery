import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Color, OrderBy } from "@/lib/filters";
import { ChevronDown } from "lucide-react";

function toCapitalizedWords(name: string) {
  var words = name.match(/[A-Za-z][a-z]*/g) || [];

  return words.map(capitalize).join(" ");
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export const SortFilterToolbar = ({
  filters,
  updateFilters,
}: {
  filters: any;
  updateFilters: any;
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
