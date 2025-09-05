import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function PostPreview({ post, flat = false }) {
  return (
    <Card
      className={cn(
        "group/gp h-full transition-all",
        flat && "border-none bg-transparent shadow-none",
      )}
    >
      {/* Title */}
      <CardHeader className="p-4">
        <CardTitle className="cursor-pointer text-xl leading-snug font-bold hover:underline hover:decoration-2 hover:underline-offset-2">
          <Link href={`/${post.category}/${post.slug}`}>
            <span>{post.title}</span>
          </Link>
        </CardTitle>
        {post.subtitle && (
          <p className="text-muted-foreground text-lg font-medium">
            {post.subtitle}
          </p>
        )}
      </CardHeader>

      {/* Excerpt */}
      <CardContent className="px-4 pb-2 text-base leading-relaxed">
        {post.excerpt}
      </CardContent>

      {/* Read More Link */}
      <CardFooter className="px-4 pb-4">
        <Link
          href={`/${post.category}/${post.slug}`}
          className="group/p inline-flex items-center text-base font-semibold"
        >
          <span>Read more</span>
          <MoveRight className="ml-1 h-4 w-4 text-transparent transition-all group-hover/gp:text-current group-hover/p:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
