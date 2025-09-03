import BrowesCategory from "@/components/BrowesCategory";
import Hero from "@/components/Hero";
import PopularPostList from "@/components/PopularPostList";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/lib/blogUtils";

export default async function Home() {
  const posts = await getPosts();

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
            Articles and Tutorials
          </h3>

          <div className="flex flex-col">
            {posts.map((post) => (
              <article key={post.id}>
                <PostPreview post={post} flat />
              </article>
            ))}
          </div>
        </section>

        <aside>
          <div className="mt-20 flex h-full flex-col gap-16">
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
