"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // local state for fast typing
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  // Sync input with current query
  useEffect(() => {
    setInputValue(q);
  }, [q]);

  // Debounced navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (inputValue) {
        params.set("q", inputValue);
      } else {
        params.delete("q");
      }
      router.replace(`?${params.toString()}`);
    }, 1000); // wait 300ms after typing stops

    return () => clearTimeout(timer);
  }, [inputValue, router, searchParams]);

  return (
    <div className="relative flex items-center">
      {!open ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-full"
        >
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-4 flex items-center gap-2 duration-200">
          <Input
            type="text"
            placeholder="Search..."
            className="w-40 sm:w-64"
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // update local state only
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setOpen(false);
              setInputValue("");
            }}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
