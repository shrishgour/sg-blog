// components/NavbarDesktop.jsx (CLIENT)
"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar";

export default function NavbarDesktop({ categories }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="hidden items-center justify-center gap-3 md:flex">
        <CategoryDropdown categories={categories} />
        <ButtonLink href="https://sgportfolioweb.vercel.app/" newWindow>
          My Work
        </ButtonLink>
        <ButtonLink href="/about">About</ButtonLink>
        <ButtonLink href="/contact">Contact</ButtonLink>
      </div>

      <div className="hidden items-center justify-end gap-4 md:flex">
        <SearchBar />
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
    </>
  );
}
