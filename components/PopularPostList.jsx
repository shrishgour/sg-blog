import { ArrowRight } from "lucide-react";
import Link from "next/link";

function PopularPostList({ posts }) {
  return (
    <ul className="-ml-7 flex flex-col gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={post.slug}
            className="group text-accent-foreground hover:text-foreground flex items-start gap-4 text-lg font-medium transition-all"
          >
            <ArrowRight className="mt-1 mr-2 h-5 w-5 transition-all group-hover:translate-x-1" />
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PopularPostList;
