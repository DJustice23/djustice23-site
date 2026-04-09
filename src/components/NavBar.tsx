"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const homeLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#impact", label: "Selected Impact" },
  { href: "#projects", label: "Featured Work" },
  { href: "#experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/site-info", label: "Site Info" },
];

export default function NavBar() {
  const pathname = usePathname();
  const links =
    pathname === "/"
      ? [...homeLinks, { href: "/site-info", label: "Site Info" }]
      : siteLinks;
  const sectionLinks = homeLinks.filter((link) => link.href.startsWith("#"));
  const [activeSectionHref, setActiveSectionHref] = useState("#home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = sectionLinks
      .map((link) => ({
        href: link.href,
        element: document.getElementById(link.href.slice(1)),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          section.element !== null,
      );

    const updateActiveSection = () => {
      const navHeight =
        document.querySelector("nav")?.getBoundingClientRect().height ?? 64;
      const viewportAnchor = window.scrollY + navHeight + 40;
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.documentElement.scrollHeight - 4;

      if (window.scrollY <= 8) {
        setActiveSectionHref(sections[0]?.href ?? "#home");
        return;
      }

      if (scrollBottom >= pageBottom) {
        setActiveSectionHref(sections.at(-1)?.href ?? "#home");
        return;
      }

      let currentHref = sections[0]?.href ?? "#home";

      for (const section of sections) {
        if (viewportAnchor >= section.element.offsetTop) {
          currentHref = section.href;
        }
      }

      setActiveSectionHref(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, sectionLinks]);

  const activeHref = pathname === "/" ? activeSectionHref : pathname;

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:color-mix(in_srgb,var(--line)_78%,white)] bg-[color:color-mix(in_srgb,var(--background)_86%,white)]/95 shadow-[0_10px_30px_rgba(39,53,86,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="text-[1.5rem] leading-none tracking-[-0.01em] text-[var(--foreground)]"
        >
          David C. Justice
        </Link>

        <ul className="hidden items-center gap-8 text-[1.05rem] text-[var(--foreground-soft)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                aria-current={activeHref === link.href ? "page" : undefined}
                className={`relative inline-flex items-center py-2 capitalize transition-colors duration-200 hover:text-[var(--foreground)] ${
                  activeHref === link.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-soft)]"
                }`}
                href={link.href}
                onClick={() => {
                  if (link.href.startsWith("#")) {
                    setActiveSectionHref(link.href);
                  }
                }}
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-[1px] h-[2px] origin-center rounded-full bg-[var(--foreground)] transition-transform duration-300 ${
                    activeHref === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
