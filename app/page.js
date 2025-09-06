import BrowesCategory from "@/components/BrowesCategory";
import Hero from "@/components/Hero";
import PopularPostList from "@/components/PopularPostList";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/lib/blogUtils";

export default async function Home({ searchParams }) {
  const posts = await getPosts();
  const q = searchParams.q || "";

  const filtered = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category?.fields?.category?.toLowerCase().includes(q),
      )
    : posts;

  return (
    <main>
      <Hero
        heading="Hi, I'm Shrish 👋"
        subHeading="Thoughts, stories, and code—welcome to My Thought Pages."
        showImage={true}
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-24 md:grid-cols-[2fr_1fr]">
        <section className="-mt-10">
          <h3 className="text-secondary-foreground mx-4 mb-4 text-base font-semibold tracking-[0.125rem] uppercase">
            Articles and Thoughts
          </h3>

          <div className="flex flex-col">
            {filtered.map((post) => (
              <article key={post.id}>
                <PostPreview post={post} flat />
              </article>
            ))}
          </div>
        </section>

        <aside>
          <div className="flex h-full flex-col gap-16 py-20">
            <section>
              <h3 className="text-secondary-foreground mx-4 mb-10 text-base font-semibold tracking-[0.125rem] uppercase">
                Browes by category
              </h3>
              <BrowesCategory />
            </section>

            <section className="sticky top-20">
              <h3 className="text-secondary-foreground mx-4 mb-10 text-base font-semibold tracking-[0.125rem] uppercase">
                Popular Content
              </h3>
              <PopularPostList posts={posts} />
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
