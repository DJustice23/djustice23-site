const buildHighlights = [
  "Built with Next.js, React, and TypeScript to keep the project strongly typed, component-driven, and extensible for future case studies and interactive features.",
  "Structured the layout around readable typography, spacing, and section hierarchy so the site works as both a portfolio and a long-form product narrative.",
  "Designed for responsive behavior across desktop and mobile using scalable layout constraints rather than one-off breakpoint hacks.",
  "Used semantic structure and reusable UI patterns to keep the codebase maintainable as the site grows beyond a single-page portfolio.",
  "Optimized media rendering with Next Image to improve loading behavior and image sizing across screen sizes.",
  "Built the project as a foundation for future additions including deeper project writeups, interactive demos, and AI-powered features.",
];

export default function SiteInfoPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-10 sm:pt-12 lg:px-12 lg:pt-14">
      <section className="max-w-[80ch]">
        <h1 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Site Info
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1.05rem] leading-[1.68] text-[var(--foreground-soft)] sm:text-[1.1rem]">
          This portfolio is intentionally designed as a working frontend sample,
          not just a static resume page. The approach emphasizes engineering
          judgment, maintainable structure, and product-minded frontend
          execution.
        </p>
        <h2 className="mt-12 text-[2.2rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[2.5rem]">
          How I Approached This Build
        </h2>
        <ul className="mt-6 list-disc space-y-5 pl-6 marker:text-[var(--foreground)]">
          {buildHighlights.map((item) => (
            <li
              key={item}
              className="max-w-[72ch] text-[1.03rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.08rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
