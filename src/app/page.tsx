import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const selectedImpact = [
  "Sole frontend engineer for an internal Google Ads platform used by a 34-person marketing team managing 3,000+ client accounts and $784K+ in ad spend — replaced a manual setup process with automated budget management and CRM integrations.",
  "Built an AI-assisted workflow using Claude, MCP, and filesystem access to generate acceptance criteria and technical documentation from Jira tickets, saving an estimated 2–3 sprint points per sprint.",
  "Drove Cursor adoption across the engineering team and established shared rules that improved coding consistency, reduced code review friction, and reinforced platform standards.",
  "Reworked Elasticsearch filtering logic to align SQL and search-index behavior, improving lead segmentation and contact visibility accuracy across the CRM.",
  "Led frontend engineering for a major CRM contact redesign, partnering with product and design from discovery through delivery — used by thousands of agents daily.",
  "Traveled on-site to real estate brokerages and represented engineering at client conferences — translating real-world usage and customer pain points directly into product and engineering input.",
];

const featuredWork = [
  {
    title: "Internal Google Ads Platform",
    description:
      "Served as the sole frontend engineer for an internal campaign platform used by a 34-person digital marketing team managing 3,000+ client accounts and $784K+ in ad spend. Shaped early architecture in React/MUI and built automated budget management, in-app controls, and CRM integrations.",
    href: "/projects/internal-google-ads-tool",
  },
  {
    title: "Modernizing a Legacy CRM Contact Experience",
    description:
      "Led redesign and refactor work across contact pages, filtering, and action systems — including a Vue 2 to Composition API migration — while preserving permissions, communication states, and business-critical legacy behavior.",
    href: "/projects/crm-contact-modernization",
  },
  {
    title: "Fixing Search and Data Access Parity",
    description:
      "Reconciled SQL and Elasticsearch query behavior so segmentation, permissions, and contact visibility matched intended business rules across legacy and modern systems.",
    href: "/projects/search-data-parity",
  },
];

const sectionH2 =
  "text-[2.6rem] leading-[1.08] tracking-[0.01em] text-[var(--foreground)] sm:text-[3rem] lg:text-[3.4rem]";

export default function Home() {
  return (
    <main
      id="home"
      className="mx-auto w-full max-w-[1400px] px-6 pb-14 pt-6 sm:pt-8 lg:px-12 lg:pt-10"
    >
      <section className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:pt-2">
          <h1 className="max-w-[14ch] text-[2.6rem] leading-[1.1] tracking-[0.01em] text-[var(--foreground)] sm:text-[3rem] lg:text-[3.6rem]">
            Senior Full-Stack Engineer for Complex SaaS Systems
          </h1>

          <p className="max-w-[46ch] text-[1.1rem] leading-[1.68] text-[var(--foreground-soft)] sm:text-[1.18rem]">
            Senior full-stack engineer with 12+ years across CRM, ad tech, QA
            automation, integrations, and legacy modernization. Strongest in
            frontend-led product engineering, cross-system debugging, and
            translating messy business workflows into stable production software.
          </p>

          <a className="cta-btn self-start" href="#projects">
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

      <section id="about" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>About</h2>
        <p className="mt-5 max-w-[52ch] text-[1.08rem] leading-[1.72] text-[var(--foreground-soft)] sm:text-[1.14rem]">
          I've always been drawn to systems — how they connect, where they
          break, and how to make them work better. I started in tech support,
          moved into QA and automation, and eventually into engineering because I
          wanted to understand the systems I was testing deeply enough to fix
          them myself. That path shaped how I work: I care about
          maintainability, reliability, and the real-world behavior of software
          under pressure. I'm frontend-minded but comfortable across APIs,
          databases, and search layers. Lately I've been building AI-assisted
          workflows with Claude and MCP that have meaningfully changed how my
          team plans and ships. Long term, I'm interested in roles closer to the
          intersection of engineering, product, and system design — senior
          engineering, TPM, or solutions engineer at a B2B SaaS company where
          the work actually matters.
        </p>
      </section>

      <section id="impact" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>Selected Impact</h2>
        <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-[var(--foreground)]">
          {selectedImpact.map((item) => (
            <li
              key={item}
              className="max-w-[62ch] text-[1.03rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.08rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>Featured Work</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featuredWork.map((work) => (
            <article
              key={work.title}
              className="section-line bg-[var(--surface)] px-5 pb-6 pt-5"
            >
              <h3 className="text-[1.6rem] leading-[1.15] tracking-[0.01em] text-[var(--foreground)]">
                {work.title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.62] text-[var(--foreground-soft)]">
                {work.description}
              </p>
              <Link
                className="mt-5 inline-flex text-[0.95rem] font-semibold text-[var(--foreground)] underline underline-offset-2"
                href={work.href}
              >
                View details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>Work Experience</h2>
        <div className="mt-5">
          <div className="section-line grid gap-5 py-7 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="text-[1.7rem] leading-[1.15] tracking-[0.01em] text-[var(--foreground)]">
                Inside Real Estate
              </h3>
              <p className="mt-1 text-[0.88rem] font-medium uppercase tracking-[0.1em] text-[var(--foreground-soft)]">
                Senior Software Engineer · 2023–Present
              </p>
            </div>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Leading frontend and full-stack product work across CRM
              modernization, internal ad tech tooling, and cross-system
              debugging at a platform serving 200,000+ daily users. Own complex
              features end-to-end, influence roadmap with behavioral data, and
              build AI-assisted workflows that have changed how the team plans
              and ships.
            </p>
          </div>
          <div className="section-line grid gap-5 py-7 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="text-[1.7rem] leading-[1.15] tracking-[0.01em] text-[var(--foreground)]">
                BoomTown
              </h3>
              <p className="mt-1 text-[0.88rem] font-medium uppercase tracking-[0.1em] text-[var(--foreground-soft)]">
                Software Engineer II · 2017–2023
              </p>
            </div>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Contributed across frontend and backend product development on a
              CRM platform serving tens of thousands of real estate
              professionals. Worked directly with product and leadership to
              shape workflow-heavy features, traveled on-site to brokerages, and
              acted as technical liaison during client escalations.
            </p>
          </div>
          <div className="section-line grid gap-5 py-7 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="text-[1.7rem] leading-[1.15] tracking-[0.01em] text-[var(--foreground)]">
                BoomTown
              </h3>
              <p className="mt-1 text-[0.88rem] font-medium uppercase tracking-[0.1em] text-[var(--foreground-soft)]">
                QA Engineer → Associate Software Engineer · 2013–2017
              </p>
            </div>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Progressed from manual QA into automation engineering through
              demonstrated technical growth. Built and maintained a test
              automation framework using Cucumber, Ruby, and Selenium WebDriver.
              Shipped a Scala-based mobile app with AWS integrations, ramping
              quickly on an unfamiliar stack under active delivery pressure.
            </p>
          </div>
          <div className="section-line grid gap-5 py-7 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="text-[1.7rem] leading-[1.15] tracking-[0.01em] text-[var(--foreground)]">
                Blackbaud
              </h3>
              <p className="mt-1 text-[0.88rem] font-medium uppercase tracking-[0.1em] text-[var(--foreground-soft)]">
                Support Specialist → Senior QA Analyst · 2010–2013
              </p>
            </div>
            <p className="max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
              Selected to work directly with early users of a newly built
              ticketing platform — gathering bugs, explaining product behavior,
              and translating feedback into structured input for product, design,
              and engineering. Advanced to Senior QA Analyst during a
              high-stakes early rollout.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>Education & Credentials</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Appalachian State University",
              detail: "B.A. Electronic Media & Broadcasting · Minor in Business",
            },
            {
              title: "The Iron Yard",
              detail: "Ruby & Application Development",
            },
            {
              title: "Stanford Online",
              detail: "Introduction to Databases",
            },
            {
              title: "Certified ScrumMaster",
              detail: "CSM · Scrum Alliance",
            },
            {
              title: "AWS ML Engineer Associate",
              detail: "In Progress · AWS Skill Builder",
            },
          ].map((item) => (
            <div key={item.title} className="section-line py-5">
              <p className="text-[1.15rem] leading-[1.2] tracking-[0.01em] text-[var(--foreground)]" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </p>
              <p className="mt-1 text-[0.92rem] leading-[1.5] text-[var(--foreground-soft)]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="pt-10 sm:pt-12 lg:pt-14">
        <h2 className={sectionH2}>Contact</h2>
        <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--foreground-soft)] sm:text-[1.1rem]">
          If you're building something interesting or just want to connect, feel
          free to reach out. I'm always up for thoughtful conversations about
          engineering, product, and making useful things better.
        </p>
        <div className="mt-7 flex flex-wrap gap-4 pb-4">
          <a
            className="cta-btn inline-flex items-center gap-3"
            href="mailto:asu23justice@gmail.com"
          >
            <HiOutlineMail className="h-5 w-5" aria-hidden="true" />
            Email Me
          </a>
          <a
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--foreground)] px-6 py-3 text-[var(--foreground)] transition-colors hover:bg-[#e4e3df]"
            href="https://www.linkedin.com/in/david-c-justice/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--foreground)] px-6 py-3 text-[var(--foreground)] transition-colors hover:bg-[#e4e3df]"
            href="https://www.instagram.com/asu23justice/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="h-5 w-5" aria-hidden="true" />
            @asu23justice
          </a>
        </div>
      </section>
    </main>
  );
}
