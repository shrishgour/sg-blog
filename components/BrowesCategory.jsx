import client from "@/lib/contentful";
import Link from "next/link";
import { Badge } from "./ui/badge";

async function getCategory() {
  const res = await client.getEntries({ content_type: "category" });
  return res.items;
}

async function BrowesCategory() {
  const categories = await getCategory();
  return (
    <div className="mx-3 flex flex-wrap items-center justify-start gap-2">
      {categories.map((category) => (
        <Badge asChild key={`/${category.sys.id}`}>
          <Link href={category.fields.category}>
            {category.fields.category}
          </Link>
        </Badge>
      ))}
    </div>
  );
}

export default BrowesCategory;
