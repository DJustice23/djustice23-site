import { notFound } from "next/navigation";
import SiteInfoDashboard from "@/components/SiteInfoDashboard";

const buildHighlights = [
  "Built as a product surface, not just a static explainer page, so live data and operational context can sit alongside narrative content.",
  "Uses a single route-backed dashboard payload to keep the client lean while still supporting weather, music, and analytics integrations.",
  "Keeps visual density intentional: a richer information layout without collapsing into generic portfolio cards or noisy widgets.",
  "Preserves graceful fallback states so the page still feels complete when optional integrations like Spotify or analytics are not configured yet.",
];

export default function SiteInfoPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-10 sm:pt-12 lg:px-12 lg:pt-14">
      <section className="max-w-[86ch]">
        <h1 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Site Info
        </h1>
        <p className="mt-5 max-w-[62ch] text-[1.05rem] leading-[1.72] text-[var(--foreground-soft)] sm:text-[1.1rem]">
          This page is where the portfolio shifts from narrative into product.
          The goal is to show frontend judgment through live integrations,
          tasteful motion-free telemetry, and a UI that feels maintained rather
          than merely published.
        </p>

        <SiteInfoDashboard />

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
      </section>
    </main>
  );
}
