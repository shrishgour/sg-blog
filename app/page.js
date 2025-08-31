import BrowesCategory from "@/components/BrowesCategory";
import PopularPostList from "@/components/PopularPostList";
import PostPreview from "@/components/PostPreview";
import heroBG from "@/public/heroBG-2.png";
import Image from "next/image";

export default function Home() {
  const posts = [
    {
      id: 0,
      slug: "an-interactive-guide-to-svg-paths",
      title: "An Interactive Guide to SVG Paths",
      date: "2025-08-24",
      excerpt:
        "SVG gives us many different primitives to work with, but by far the most powerful is the <path> element. In this tutorial, we’ll demystify this infamous element and see some of the cool things we can do with it!",
      slug: "svg-paths-guide",
    },
    {
      id: 1,
      slug: "hello-world",
      title: "Hello World",
      subtitle: "A clean & small subtitle for hello world",
      date: "2025-08-24",
      excerpt:
        "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at debitis similique, dolorem, vel explicabo dolor excepturi corporis, consectetur adipisci vitae sunt asperiores tempora magnam rem hic est?",
    },
    {
      id: 2,
      slug: "nextjs-tips",
      title: "Next.js Tips",
      date: "2025-08-20",
      excerpt: "Some useful tips for Next.js projects.",
    },
    {
      id: 3,
      slug: "an-interactive-guide-to-svg-paths",
      title: "An Interactive Guide to SVG Paths",
      date: "2025-08-24",
      excerpt:
        "SVG gives us many different primitives to work with, but by far the most powerful is the <path> element. In this tutorial, we’ll demystify this infamous element and see some of the cool things we can do with it!",
      slug: "svg-paths-guide",
    },
    {
      id: 4,
      slug: "hello-world",
      title: "Hello World",
      subtitle: "A clean & small subtitle for hello world",
      date: "2025-08-24",
      excerpt:
        "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at debitis similique, dolorem, vel explicabo dolor excepturi corporis, consectetur adipisci vitae sunt asperiores tempora magnam rem hic est?",
    },
    {
      id: 5,
      slug: "nextjs-tips",
      title: "Next.js Tips",
      date: "2025-08-20",
      excerpt: "Some useful tips for Next.js projects.",
    },
    {
      id: 6,
      slug: "an-interactive-guide-to-svg-paths",
      title: "An Interactive Guide to SVG Paths",
      date: "2025-08-24",
      excerpt:
        "SVG gives us many different primitives to work with, but by far the most powerful is the <path> element. In this tutorial, we’ll demystify this infamous element and see some of the cool things we can do with it!",
      slug: "svg-paths-guide",
    },
    {
      id: 7,
      slug: "hello-world",
      title: "Hello World",
      subtitle: "A clean & small subtitle for hello world",
      date: "2025-08-24",
      excerpt:
        "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at debitis similique, dolorem, vel explicabo dolor excepturi corporis, consectetur adipisci vitae sunt asperiores tempora magnam rem hic est?",
    },
    {
      id: 8,
      slug: "nextjs-tips",
      title: "Next.js Tips",
      date: "2025-08-20",
      excerpt: "Some useful tips for Next.js projects.",
    },
  ];

  return (
    <main>
      <section className="relative mx-auto h-[60vh] w-screen sm:h-[50vh]">
        <div className="z-10 mx-auto grid h-full max-w-5xl grid-cols-[2fr_1fr] items-center px-2">
          <h1 className="col-span-full mt-auto mb-4 text-4xl font-extrabold sm:text-5xl">
            Hi, I&apos;m Shrish 👋
          </h1>
          <p className="text-accent-foreground mb-auto text-base font-medium sm:text-lg">
            Thoughts, stories, and code—welcome to My Thought Pages.
          </p>
        </div>
        <Image
          src={heroBG}
          alt="Image of the blog's owner"
          fill
          priority
          className="-z-10 overflow-auto object-cover object-left-top"
        />
        <div className="to-background absolute inset-0 -z-10 bg-gradient-to-b from-70% via-transparent/80"></div>

        <div className="from-primary/90 via-muted-foreground/60 to-background absolute inset-0 -z-20 -mt-25 animate-[scrollGradient_15.5s_linear_infinite] bg-gradient-to-b bg-[length:100%_100%]" />
      </section>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-24 md:grid-cols-[2fr_1fr]">
        <section className="-mt-10">
          <h3 className="text-secondary-foreground mx-4 mb-10 text-base font-semibold tracking-[0.125rem] uppercase">
            Articles and Tutorials
          </h3>
          <div className="flex flex-col gap-12">
            {posts.map((post) => (
              <article key={post.id}>
                <PostPreview post={post} />
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
