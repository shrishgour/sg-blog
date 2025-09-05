import { getCategory } from "@/lib/blogUtils";
import Link from "next/link";

async function Footer() {
  const categories = await getCategory();

  return (
    <footer className="relative mx-auto w-screen overflow-hidden pt-20">
      <div className="from-primary/90 via-muted-foreground/50 to-background absolute inset-0 -z-20 animate-[scrollGradient_5.5s_linear_infinite] bg-gradient-to-t bg-[length:100%_100%]" />

      <div className="to-background absolute inset-0 -z-10 bg-gradient-to-t from-70% via-transparent/80"></div>

      <div className="relative mx-auto max-w-5xl pt-16 pb-12">
        <div className="mx-2 grid grid-cols-[2fr_3fr] gap-x-24">
          <div className="mb-12">
            <h2 className="text-foreground text-2xl font-bold">Shrish Gour</h2>
            <p className="text-accent-foreground mt-2 text-sm">
              Thoughts, stories, and code—My Thought Pages.
            </p>
          </div>
          <div className="row-start-2">
            {/* Newsletter input */}
            <p className="text-foreground mt-2 text-sm">
              Want to know when I publish new content? Enter your email to join
              my free newsletter:
            </p>
            <form className="mt-6 flex justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-border bg-background text-foreground w-64 rounded-l-md border px-4 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-r-md px-4 py-2 text-sm font-medium"
              >
                →
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="row-start-2 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-foreground mb-3 font-semibold uppercase">
                Browse by Category
              </h3>
              <ul className="grid grid-cols-2 items-center justify-between gap-2">
                {categories.map((category) => (
                  <li key={category.fields.category}>
                    <Link
                      href={category.fields.category}
                      className="text-accent-foreground hover:text-foreground hover:font-semibold"
                    >
                      {category.fields.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-foreground mb-3 font-semibold uppercase">
                General
              </h3>
              <ul className="text-accent-foreground space-y-2">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    My Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-end">
              <h3 className="text-foreground mb-3 font-semibold uppercase">
                Social
              </h3>
              <ul className="text-accent-foreground space-y-2">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Twitter
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-foreground">
                    GitHub
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-foreground">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-secondary/50 text-secondary/50 row-start-3 mx-2 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Shrish Gour. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
