import Image from "next/image";
import Link from "next/link";

const achievements = [
  "Delivered an 18% bundle reduction and improved task completion by 12% on a legacy panel redesign.",
  "Established UI architecture and testing patterns that reduced regressions across shared frontend modules.",
  "Led cross-functional delivery from discovery to production for enterprise reporting and search features.",
];

export default function Home() {
  return (
    <main
      id="home"
      className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-8 lg:px-12 lg:pt-12"
    >
      <section className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-9">
          <h1 className="text-[3.4rem] leading-[0.95] tracking-[0.01em] text-[var(--foreground)] sm:text-[4.4rem] lg:text-[6rem]">
            Senior Software Engineer
          </h1>

          <p className="max-w-[52ch] text-[1.3rem] leading-[1.65] text-[var(--foreground-soft)]">
            I build resilient, high-quality web applications with clear
            architecture, strong frontend systems, and measurable product
            impact. My focus spans React, Vue, TypeScript, Laravel, SQL, and
            search-driven platforms.
          </p>

          <a className="cta-btn" href="#about">
            Explore More
          </a>
        </div>

        <div className="overflow-hidden border border-[var(--line)] bg-[#d9d1c5]">
          <Image
            src="/colorado_kona_me.jpg"
            alt="David Justice portrait"
            width={3072}
            height={4080}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section id="about" className="pt-24">
        <h2 className="text-[3.6rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[4.2rem]">
          About
        </h2>
        <p className="mt-8 max-w-[52ch] text-[1.22rem] leading-[1.75] text-[var(--foreground-soft)]">
          I am a frontend-focused full-stack engineer with a track record of
          modernizing mature products without disrupting business-critical
          workflows. I pair design systems and interaction quality with testable
          architecture, delivery discipline, and pragmatic collaboration across
          product and engineering teams.
        </p>
      </section>

      <section id="experience" className="pt-24">
        <h2 className="text-[3.6rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[4.2rem]">
          Experience
        </h2>
        <div className="mt-8">
          <div className="section-line grid gap-7 py-10 md:grid-cols-2 md:gap-12">
            <h3 className="text-[2.2rem] tracking-[0.012em] text-[var(--foreground)]">
              Senior Frontend Engineer
            </h3>
            <p className="max-w-[42ch] text-[1.17rem] leading-[1.68] text-[var(--foreground-soft)]">
              Owned feature delivery from architecture through testing and
              release, improving maintainability and confidence across critical
              product surfaces.
            </p>
          </div>
          <div className="section-line grid gap-7 py-10 md:grid-cols-2 md:gap-12">
            <h3 className="text-[2.2rem] tracking-[0.012em] text-[var(--foreground)]">
              Full-Stack Product Builder
            </h3>
            <p className="max-w-[42ch] text-[1.17rem] leading-[1.68] text-[var(--foreground-soft)]">
              Implemented backend services, API contracts, and data flows that
              enabled performance-minded UX improvements and dependable
              cross-team integration.
            </p>
          </div>
          <div className="section-line grid gap-7 py-10 md:grid-cols-2 md:gap-12">
            <h3 className="text-[2.2rem] tracking-[0.012em] text-[var(--foreground)]">
              Mentor and Technical Lead
            </h3>
            <p className="max-w-[42ch] text-[1.17rem] leading-[1.68] text-[var(--foreground-soft)]">
              Guided peers through code reviews, architecture decisions, and
              release strategy, raising team standards for delivery speed and
              software quality.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="pt-24">
        <h2 className="text-[3.6rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[4.2rem]">
          Education
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden border border-[var(--line)]">
            <Image
              src="/colorado_kona_me.jpg"
              alt="David Justice speaking outdoors"
              width={3072}
              height={4080}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="max-w-[42ch] text-[1.17rem] leading-[1.68] text-[var(--foreground-soft)]">
            Formal education in computer science and continuous professional
            growth through production-scale engineering work, platform
            modernization, and distributed team leadership.
          </p>
        </div>
      </section>

      <section id="achievements" className="pt-24">
        <h2 className="text-[3.6rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[4.2rem]">
          Achievements
        </h2>
        <ul className="mt-8 space-y-6">
          {achievements.map((item) => (
            <li
              key={item}
              className="section-line max-w-[72ch] pt-7 text-[1.12rem] leading-[1.68] text-[var(--foreground-soft)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="pt-24">
        <h2 className="text-[3.6rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[4.2rem]">
          Contact
        </h2>
        <p className="mt-6 max-w-[46ch] text-[1.17rem] leading-[1.68] text-[var(--foreground-soft)]">
          Open to senior frontend and full-stack opportunities where product
          impact, engineering quality, and collaborative execution are valued.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 pb-10">
          <a className="cta-btn" href="mailto:you@example.com">
            Email Me
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] px-6 py-3 text-[var(--foreground)] transition-colors hover:bg-[#e4e3df]"
            href="/projects"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
