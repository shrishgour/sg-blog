import PostPreview from "@/components/PostPreview";
import { getPostsByCategory } from "@/lib/blogUtils";

async function page({ params }) {
  const para = await params;
  const posts = await getPostsByCategory(para.category);
  const categoryName = posts[0]?.category.category;

  return (
    <>
      {/* Background for THIS page */}
      <div className="bg-muted dark:bg-background pointer-events-none fixed inset-0 -z-10" />

      <main>
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="mx-5 mb-6 flex items-center justify-between">
            <h1 className="mx-4 text-4xl font-bold">{categoryName}</h1>
            <p className="mx-4 text-lg font-semibold">
              {`${posts.length} ${posts.length > 1 ? "Articles" : "Article"}`}
            </p>
          </div>

          <div className="grid grid-cols-2 items-stretch justify-between gap-10">
            {posts.map((post) => (
              <article key={post.id}>
                <PostPreview post={post} />
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
