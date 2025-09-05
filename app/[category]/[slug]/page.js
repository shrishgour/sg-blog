import Hero from "@/components/Hero";
import BlogContent from "@/components/PostContent";
import { getPostBySlug } from "@/lib/blogUtils";
import { formatDateServer } from "@/lib/formatDate";

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="max-w-none">
      <Hero
        heading={post.title}
        subHeading={
          <>
            Filed under{" "}
            <span className="text-accent-foreground font-bold">
              {post.category}
            </span>{" "}
            on{" "}
            <span className="text-accent-foreground font-medium">
              {formatDateServer(post.publishedDate)}
            </span>
          </>
        }
      />
      <div className="prose prose-lg prose-slate dark:prose-invert mx-auto grid max-w-5xl grid-cols-1 gap-x-24 md:grid-cols-[2fr_1fr]">
        <BlogContent content={post.content} />
      </div>
    </article>
  );
}
