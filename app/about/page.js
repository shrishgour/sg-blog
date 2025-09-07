import Hero from "@/components/Hero";

// app/about/page.jsx
export default function Page() {
  return (
    <main>
      <Hero
        heading="Hi, I'm Shrish 👋"
        subHeading="Thoughts, stories, and code—welcome to My Thought Pages."
        showImage={true}
      />
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-secondary-foreground mb-4 text-2xl font-semibold tracking-[0.125rem] uppercase">
          About Me
        </h2>
        <p className="mb-8 text-lg">
          I’m a full-stack developer transitioning from a deep background in C#
          and Unity — a foundation that taught me precision, architecture, and
          creative workflow.
        </p>
        <h2 className="text-secondary-foreground mb-4 text-lg font-semibold tracking-[0.125rem] uppercase">
          Tech Stack & Strengths
        </h2>
        <ul className="ml-5 list-disc space-y-2 text-lg">
          <li>React + Next.js with latest App Router & Server Components</li>
          <li>React Query & Redux Toolkit for modern state management</li>
          <li>Custom Hooks, Context, and performance-oriented architecture</li>
          <li>Tailwind CSS v4, shadcn/ui, accessible design systems</li>
          <li>
            Node.js, Express, REST APIs, JWT authentication,
            SQL/MongoDB/Supabase
          </li>
          <li>
            Workflow: Git, Agile/Scrum, CI/CD with Vercel/Netlify, Testing &
            Debugging
          </li>
        </ul>
      </div>
    </main>
  );
}
