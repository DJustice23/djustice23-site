"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const homeLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#impact", label: "Selected Impact" },
  { href: "#projects", label: "Featured Work" },
  { href: "#experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "/site-info", label: "Site Info" },
  { href: "#contact", label: "Contact" },
];

const siteLinks = [
  { href: "/", label: "Home" },
  //{ href: "/projects", label: "Projects" },
  { href: "/site-info", label: "Site Info" },
];

export default function NavBar() {
  const pathname = usePathname();
  const links = pathname === "/" ? homeLinks : siteLinks;

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="text-[2.15rem] leading-none tracking-[0.01em] text-[var(--foreground)]"
        >
          David C. Justice
        </Link>

        <ul className="hidden items-center gap-8 text-[1.05rem] text-[var(--foreground-soft)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="capitalize transition-colors hover:text-[var(--foreground)]"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
