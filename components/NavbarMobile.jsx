// components/NavbarMobile.jsx (CLIENT)
"use client";

import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar";

export default function NavbarMobile({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        className="col-start-3 col-end-4 justify-self-end md:hidden"
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-3 px-4 py-3">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>

            <div className="flex flex-col">
              <CategoryDropdown categories={categories} />
              <Link
                href="https://sgportfolioweb.vercel.app/"
                className="hover:bg-accent rounded px-2 py-2"
                target="_black"
              >
                MyWork
              </Link>
              <Link
                href="/contact"
                className="hover:bg-accent rounded px-2 py-2"
              >
                Contact
              </Link>
              <Link href="/about" className="hover:bg-accent rounded px-2 py-2">
                About
              </Link>
            </div>

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
    </>
  );
}
