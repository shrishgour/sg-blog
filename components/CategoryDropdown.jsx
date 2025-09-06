import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function CategoryDropdown({ categories }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="text-primary focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-sm border border-transparent px-2 py-2 text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:px-4">
          Categories
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-4">
        <ul className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <li key={category.fields.category} className="flex justify-center">
              <DropdownMenuItem asChild>
                <Link
                  href={category.fields.category}
                  className="text-accent-foreground hover:text-foreground hover:font-semibold"
                >
                  {category.fields.category}
                </Link>
              </DropdownMenuItem>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoryDropdown;
