import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const selectedImpact = [
  "Served as primary engineer, designer, and informal product owner for an internal Google Ads platform — translating digital marketing operational needs into a user-friendly tool managing 3,000+ client accounts and $784K+ in ad spend.",
  "Used FullStory and Amplitude data alongside the Director of Product Management to identify UX friction points, validate behavior patterns, and influence roadmap and feature decisions.",
  "Built an AI-assisted workflow using Claude, MCP, and filesystem access to generate acceptance criteria and technical documentation from Jira tickets — saving an estimated 2–3 sprint points per sprint.",
  "Created architectural diagrams, implementation guides, and technical documentation for complex cross-application initiatives, improving handoff clarity and planning across teams.",
  "Traveled on-site to real estate brokerages and represented engineering at client conferences — observing real-world usage, gathering structured feedback, and translating customer pain points into product direction.",
  "Acted as technical liaison during client escalations and delivered product demos and training for client-facing and cross-functional teams.",
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
            12+ years bridging engineering, product, and customers in B2B SaaS.
            I translate complex business and technical requirements into working
            software — and into language that stakeholders, clients, and teams
            can act on.
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
          My career has always sat at the intersection of engineering, product,
          and customer needs. I started in enterprise support, moved into QA, and
          eventually into software engineering — not to leave the customer-facing
          work behind, but because I wanted the technical depth to actually solve
          the problems I was seeing. That path gives me something most engineers
          don't have: I can write the code, run the demo, shape the requirements,
          and explain the tradeoffs to a non-technical stakeholder in the same
          conversation. I've traveled on-site to client brokerages, delivered
          product demos, acted as technical liaison during escalations, and used
          FullStory and Amplitude data to influence roadmap decisions. Lately
          I've been building AI-assisted workflows with Claude and MCP that have
          meaningfully changed how my team plans and ships. I'm looking for a
          TPM or Solutions Engineer role at a B2B SaaS company where deep
          technical credibility and customer-facing communication both matter.
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
              Primary engineer, designer, and product owner for an internal
              Google Ads campaign platform. Used FullStory and Amplitude with
              the Director of PM to shape roadmap decisions. Created
              architectural documentation and implementation guides for
              cross-team initiatives. Built AI-assisted workflows with Claude
              and MCP that reduced sprint planning overhead across the team.
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
              Worked directly with product managers and company leadership to
              shape workflow-heavy CRM features, advising on edge cases, user
              behavior, and business rules. Traveled on-site to brokerages and
              represented engineering at client conferences. Acted as technical
              liaison during escalations and delivered product demos and
              enablement sessions for client-facing teams.
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
              Progressed from manual QA into automation and software engineering
              through multiple promotions. Helped shape lead-routing and
              claim-based assignment workflows based on real brokerage
              operations. Built and maintained a Cucumber/Ruby/Selenium test
              automation framework and performed API testing for BoomTown's
              first mobile app.
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
              ticketing platform — part QA, part customer success, part product
              researcher. Gathered bugs, explained product behavior, and
              translated feedback into structured input for product, design, and
              engineering. Advanced to Senior QA Analyst during a high-stakes
              rollout.
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
          If you're building a product that needs someone who can think across
          engineering, product, and customer needs — or if you just want to
          connect — feel free to reach out. I'm open to TPM and Solutions
          Engineer roles at B2B SaaS companies.
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
