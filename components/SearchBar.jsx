"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

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
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
