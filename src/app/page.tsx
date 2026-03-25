import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const selectedImpact = [
  "Led development of an internal Google Ads campaign platform used by digital marketing teams to manage client accounts and campaigns.",
  "Modernized CRM contact workflows across multiple repositories, including redesigns, responsiveness, and refactors while preserving legacy business rules.",
  "Resolved SQL and Elasticsearch parity issues affecting segmentation, visibility, permissions, and search reliability.",
  "Progressed from support and QA into senior engineering, bringing a strong debugging and reliability mindset into full-stack delivery.",
  "Helped shape workflow-heavy CRM features and integrations around how brokerages and agents actually operate in the real world.",
];

const featuredWork = [
  {
    title: "Internal Google Ads Platform",
    description:
      "Served as the sole frontend engineer for an internal campaign platform used by digital marketing teams, shaping early architecture in React/MUI and supporting backend workflows including Google Ads API research and account import tooling.",
    href: "/projects/internal-google-ads-tool",
  },
  {
    title: "Modernizing a Legacy CRM Contact Experience",
    description:
      "Led redesign and refactor work across contact pages, filtering, and action systems while preserving permissions, communication states, and business-critical legacy behavior.",
    href: "/projects/crm-contact-modernization",
  },
  {
    title: "Fixing Search and Data Access Parity",
    description:
      "Reconciled SQL and Elasticsearch query behavior so segmentation, permissions, and contact visibility matched intended business rules across legacy and modern systems.",
    href: "/projects/search-data-parity",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-6 sm:pt-8 lg:px-12 lg:pt-10"
    >
      <section className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="flex flex-col gap-10 lg:pt-2 sm:gap-12">
          <h1 className="max-w-[12ch] text-[2.8rem] leading-[1.04] tracking-[0.01em] text-[var(--foreground)] sm:text-[3.45rem] lg:text-[4.45rem]">
            Senior Product Engineer
          </h1>
          <h2 className="text-[1.55rem] leading-[1.08] tracking-[0.02em] text-[var(--foreground)] sm:text-[1.8rem] lg:text-[2rem]">
            for Complex SaaS Systems
          </h2>

          <p className="max-w-[44ch] text-[1.12rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.2rem]">
            Senior full-stack engineer with 12+ years across CRM, ad tech, QA
            automation, integrations, and legacy modernization. Strongest in
            frontend-led product engineering, cross-system debugging, and
            translating messy business workflows into stable production software
          </p>

          <a className="cta-btn" href="#projects">
            View Selected Work
          </a>
        </div>

        <div className="mx-auto w-full max-w-[600px] overflow-hidden border border-[var(--line)] bg-[#d9d1c5] lg:justify-self-end">
          <Image
            src="/PXL_20230211_234204974~4.jpg"
            alt="David Justice with his dog"
            width={3072}
            height={4080}
            priority
            className="aspect-[4/5] h-auto w-full object-cover"
          />
        </div>
      </section>

      <section id="about" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          About
        </h2>
        <p className="mt-6 max-w-[54ch] text-[1.08rem] leading-[1.72] text-[var(--foreground-soft)] sm:text-[1.14rem]">
          I’ve always been drawn to systems, how they connect, where they break,
          and how to make them work better. I started in tech support, moved
          into QA and automation, and eventually into engineering because I
          wanted to understand the systems I was testing deeply enough to fix
          them myself. That path shaped how I work: I care about
          maintainability, reliability, and the real-world behavior of software
          under pressure. I’m frontend-minded, but comfortable working through
          APIs, databases, and search layers when that’s what the product
          requires. Long term, I’m especially interested in roles that sit
          closer to the intersection of engineering, product, and system design.
        </p>
      </section>

      <section id="impact" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Selected Impact
        </h2>
        <ul className="mt-6 list-disc space-y-5 pl-6 marker:text-[var(--foreground)]">
          {selectedImpact.map((item) => (
            <li
              key={item}
              className="max-w-[72ch] text-[1.03rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.08rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Featured Work
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredWork.map((work) => (
            <article
              key={work.title}
              className="section-line bg-[var(--surface)] px-5 pb-6 pt-5"
            >
              <h3 className="text-[1.55rem] leading-[1.15] tracking-[0.012em] text-[var(--foreground)]">
                {work.title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.62] text-[var(--foreground-soft)]">
                {work.description}
              </p>
              <Link
                className="mt-5 inline-flex text-[0.98rem] font-medium text-[var(--foreground)] underline"
                href={work.href}
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Work Experience
        </h2>
        <div className="mt-6">
          <div className="section-line grid gap-5 py-8 md:grid-cols-2 md:gap-10">
            <h3 className="text-[1.95rem] leading-[1.06] tracking-[0.012em] text-[var(--foreground)]">
              Inside Real Estate (including BoomTown platform) | Associate
              Software Engineer to Senior Software Engineer | 2020 - Present
            </h3>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Led frontend and full-stack product work across CRM modernization,
              internal Google Ads account and campaign tooling, and cross-system
              debugging, including SQL/Elasticsearch parity issues, legacy
              refactors, and workflow-heavy SaaS features delivered across
              multiple repositories.
            </p>
          </div>
          <div className="section-line grid gap-5 py-8 md:grid-cols-2 md:gap-10">
            <h3 className="text-[1.95rem] leading-[1.06] tracking-[0.012em] text-[var(--foreground)]">
              BoomTown | Senior Quality Assurance Engineer to Associate Software
              Test Engineer | 2013 - 2020
            </h3>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Progressed from QA into automation and engineering while
              contributing to workflow-heavy CRM features, client-facing product
              discussions, third-party integrations, and mobile/API testing.
            </p>
          </div>
          <div className="section-line grid gap-5 py-8 md:grid-cols-2 md:gap-10">
            <h3 className="text-[1.95rem] leading-[1.06] tracking-[0.012em] text-[var(--foreground)]">
              Blackbaud | Senior QA Analyst / Support Specialist | 2010 - 2013
            </h3>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Began in enterprise software support, then moved into QA and early
              product-facing client work, helping shape a new ticketing platform
              through structured feedback, test planning, and automation
              leadership.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Education
        </h2>
        <div className="mt-6">
          <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
            B.A. in Electronic Media/Broadcasting with a Business minor from
            Appalachian State University, along with technical training through
            The Iron Yard (Ruby/Application Development), Stanford coursework in
            Introduction to Databases, Certified ScrumMaster (CSM)
            certification, and ongoing AWS Skill Builder coursework toward the
            Machine Learning Engineer Associate.
          </p>
        </div>
      </section>

      <section id="contact" className="pt-18 sm:pt-20 lg:pt-24">
        <h2 className="text-[2.9rem] leading-none tracking-[0.015em] text-[var(--foreground)] sm:text-[3.4rem] lg:text-[3.8rem]">
          Contact
        </h2>
        <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
          If you’re building something interesting or just want to connect, feel
          free to reach out. I’m always up for thoughtful conversations about
          engineering, product, and making useful things better.
        </p>
        <div className="mt-7 flex flex-wrap gap-4 pb-4">
          <a
            className="cta-btn inline-flex items-center gap-3"
            href="mailto:asu23justice@gmail.com"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Email Me
          </a>
          <a
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--foreground)] px-6 py-3 text-[var(--foreground)] transition-colors hover:bg-[#e4e3df]"
            href="https://www.linkedin.com/in/david-c-justice/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--foreground)] px-6 py-3 text-[var(--foreground)] transition-colors hover:bg-[#e4e3df]"
            href="https://www.instagram.com/asu23justice/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            @asu23justice
          </a>
        </div>
      </section>
    </main>
  );
}
