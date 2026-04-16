import { notFound } from "next/navigation";

const buildHighlights = [
  "Built as a product surface, not just a static explainer page, so live data and operational context can sit alongside narrative content.",
  "Uses a single route-backed dashboard payload to keep the client lean while still supporting weather, music, and analytics integrations.",
  "Keeps visual density intentional: a richer information layout without collapsing into generic portfolio cards or noisy widgets.",
  "Preserves graceful fallback states so the page still feels complete when optional integrations like Spotify or analytics are not configured yet.",
];

const plannedIntegrations = [
  {
    label: "Live Weather",
    description:
      "Current conditions for Mills River, NC via Open-Meteo — temperature, wind, and sky conditions updated on every page load.",
  },
  {
    label: "Spotify Pulse",
    description:
      "Real-time now-playing data pulled from the Spotify API, including album art, track, artist, and a direct link to open in Spotify.",
  },
  {
    label: "Traffic Snapshot",
    description:
      "Visitor counts, session duration, top page, and a visual interest trend — pluggable to any privacy-friendly analytics provider.",
  },
  {
    label: "Local Time",
    description:
      "A live clock for Mills River, NC — a small touch that makes the page feel maintained rather than merely published.",
  },
];

export default function SiteInfoPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-10 sm:pt-12 lg:px-12 lg:pt-14">
      <div className="max-w-[62ch]">
        <h1 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Site Info
        </h1>
        <p className="mt-5 text-[1.05rem] leading-[1.72] text-[var(--foreground-soft)] sm:text-[1.1rem]">
          This page is where the portfolio shifts from narrative into product.
          The goal is to show frontend judgment through live integrations,
          tasteful telemetry, and a UI that feels maintained rather than merely
          published. Live data feeds are coming once the site moves off static
          hosting.
        </p>
      </div>

      <section className="mt-10">
        <div className="section-line grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-4">
          {plannedIntegrations.map((item) => (
            <article key={item.label} className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--foreground)] opacity-30" />
                <h3 className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                  {item.label}
                </h3>
              </div>
              <p className="text-[1.02rem] leading-[1.65] text-[var(--foreground-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <h2 className="text-[2.1rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[2.4rem]">
          Build Principles
        </h2>
        <ul className="mt-6 list-disc space-y-5 pl-6 marker:text-[var(--foreground)]">
          {buildHighlights.map((item) => (
            <li
              key={item}
              className="max-w-[74ch] text-[1.03rem] leading-[1.68] text-[var(--foreground-soft)] sm:text-[1.08rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
