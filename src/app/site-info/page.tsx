const buildHighlights = [
  "Built with Next.js 16 + React 19 + TypeScript for a modern component architecture and maintainable, strongly typed UI logic.",
  "Styled with Tailwind CSS v4 and CSS design tokens, creating a consistent visual system with reusable spacing, typography, and color patterns.",
  "Designed for responsive behavior across desktop and mobile with layout constraints, readable line lengths, and scalable typography.",
  "Used semantic HTML structure and clear section hierarchy to improve accessibility, scanning, and long-form portfolio readability.",
  "Optimized core media rendering with Next Image for responsive images, sizing control, and better loading behavior.",
  "Structured the project with reusable app routes and content-driven sections to support future growth into deeper case studies.",
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
          not just a static resume page. The build emphasizes component
          structure, responsive design, typography-driven layout, and production
          implementation details that reflect how I ship user-facing interfaces.
        </p>
        <h2 className="mt-12 text-[2.2rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[2.5rem]">
          How This Site Is Built
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
