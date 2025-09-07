"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mblaqonw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto mt-20 max-w-5xl">
      <h1 className="mx-4 mb-4 text-4xl font-bold">Contact Me</h1>
      <p className="mx-4 mb-6 text-lg">
        Want to chat about a project, collaboration, or tech talks? Fill in the
        form below—I&apos;d love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="mx-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded border px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded border px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="h-32 w-full rounded border px-4 py-2"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-primary rounded px-6 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
}
