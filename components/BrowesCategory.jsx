import Link from "next/link";
import { Badge } from "./ui/badge";

function BrowesCategory() {
  return (
    <div className="mx-3 flex flex-wrap items-center justify-start gap-2">
      <Badge
        asChild
        // className="bg-primary/75 hover:ring-primary/75 m-1 px-3 py-1.5 transition-all hover:ring-2"
      >
        <Link href="/category/design">Design</Link>
      </Badge>
      <Badge asChild>
        <Link href="/category/development">Development</Link>
      </Badge>
      <Badge asChild>
        <Link href="/category/life">Life</Link>
      </Badge>
      <Badge asChild>
        <Link href="/category/books">Books</Link>
      </Badge>
      <Badge asChild>
        <Link href="/category/react">React</Link>
      </Badge>
    </div>
  );
}

export default BrowesCategory;
