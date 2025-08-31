"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ButtonLink from "./ButtonLink";
import SearchBar from "./SearchBar"; // your toggleable search button/input (desktop)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 bg-transparent pt-5 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-center px-4 py-3">
        {/* Branding */}
        <Link href="/" className="text-base font-bold sm:text-lg">
          Shrish <span className="text-primary">| My Thought Pages</span>
        </Link>

        {/* Desktop: menu + search + theme */}
        <div className="hidden items-center justify-center gap-4 md:flex">
          <ButtonLink href="/">Home</ButtonLink>

          <ButtonLink href="/blog">Blog</ButtonLink>

          <ButtonLink href="/about">About</ButtonLink>
        </div>

        <div className="hidden items-center justify-end gap-4 md:flex">
          {/* Search (toggle-on-click component) */}
          <SearchBar />

          {/* Dark mode */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}
        </div>
        {/* Mobile hamburger */}
        <button
          className="col-start-3 col-end-4 justify-self-end md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-3 px-4 py-3">
            {/* Search full width */}
            <Input type="text" placeholder="Search..." className="w-full" />

            {/* Links */}
            <div className="flex flex-col">
              <Link href="/" className="hover:bg-accent rounded px-2 py-2">
                Home
              </Link>
              <Link href="/blog" className="hover:bg-accent rounded px-2 py-2">
                Blog
              </Link>
              <Link href="/about" className="hover:bg-accent rounded px-2 py-2">
                About
              </Link>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <div className="pt-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
