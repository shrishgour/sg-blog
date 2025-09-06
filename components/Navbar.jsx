// components/Navbar.jsx (SERVER)
import { getCategory } from "@/lib/blogUtils";
import Link from "next/link";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default async function Navbar() {
  const categories = await getCategory();

  return (
    <nav className="sticky top-0 z-50 bg-transparent pt-5 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_2fr_1fr] items-center px-4 py-3">
        {/* Branding */}
        <Link href="/" className="text-base font-bold sm:text-lg">
          Shrish <span className="text-primary">| My Thought Pages</span>
        </Link>

        {/* Desktop nav */}
        <NavbarDesktop categories={categories} />

        {/* Mobile menu toggle */}
        <NavbarMobile categories={categories} />
      </div>
    </nav>
  );
}
