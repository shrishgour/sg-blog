"use client";

import { toast } from "sonner";

export default function NewsletterForm() {
  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email before subscribing.");
      return;
    }

    toast.success(`You’re now part of the newsletter, ${email}! 🎉`);

    e.target.reset(); // clear input
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex justify-start">
      <input
        type="email"
        name="email"
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
  );
}
