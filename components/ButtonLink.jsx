import Link from "next/link";

export default function ButtonLink({ href, children, newWindow = false }) {
  return (
    <Link
      href={href}
      target={newWindow ? "_blank" : "_self"}
      className="text-primary focus-visible:ring-ring inline-flex items-center justify-center rounded-sm border border-transparent px-4 py-2 text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {children}
    </Link>
  );
}
