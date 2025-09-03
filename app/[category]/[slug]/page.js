import Hero from "@/components/Hero";
import { getPostBySlug } from "@/lib/blogUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long", // "Monday"
    year: "numeric", // "2025"
    month: "long", // "September"
    day: "numeric", // "3"
  }).format(date);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
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
              {formatDate(post.publishedDate)}
            </span>
          </>
        }
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-24 md:grid-cols-[2fr_1fr]">
        <div className="mx-2">{documentToReactComponents(post.content)}</div>
      </div>
    </article>
  );
}
