import Link from "next/link";
import projectsData from "@/content/projects.json";
import type { Project } from "@/content/types";

const projects = projectsData as Project[];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proj = projects.find((p) => p.slug === slug);

  if (!proj) {
    return (
      <main className="mx-auto max-w-[1200px] px-6 py-10 lg:px-12">
        Not found
      </main>
    );
  }

  if (!proj.overview) {
    return (
      <main className="mx-auto w-full max-w-[1200px] space-y-5 px-6 py-10 text-[#243454] lg:px-12">
        <Link href="/" className="text-sm underline">
          ← Back
        </Link>
        <h1 className="text-5xl font-semibold font-[var(--font-display)]">
          {proj.name}
        </h1>
        <p>Details coming soon.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-5 px-6 py-10 text-[#243454] lg:px-12">
      <Link href="/" className="text-sm underline">
        ← Back
      </Link>
      <h1 className="text-5xl font-semibold font-[var(--font-display)]">
        {proj.name}
      </h1>
      <p className="max-w-[70ch] text-[#2d3f61]">
        {proj.overview || proj.summary}
      </p>

      {proj.myRole && (
        <section className="space-y-1">
          <h2 className="text-2xl font-[var(--font-display)]">My Role</h2>
          <p>{proj.myRole}</p>
        </section>
      )}

      {proj.problem && (
        <section className="space-y-1">
          <h2 className="text-2xl font-[var(--font-display)]">Problem</h2>
          <p>{proj.problem}</p>
        </section>
      )}

      {proj.approach && (
        <section className="space-y-1">
          <h2 className="text-2xl font-[var(--font-display)]">Approach</h2>
          <p>{proj.approach}</p>
        </section>
      )}

      {proj.outcome && (
        <section className="space-y-1">
          <h2 className="text-2xl font-[var(--font-display)]">Outcome</h2>
          <p>{proj.outcome}</p>
        </section>
      )}

      <section className="space-y-1">
        <h2 className="text-2xl font-[var(--font-display)]">Stack</h2>
        <p className="text-sm text-[#4a5f86]">{proj.stack.join(", ")}</p>
      </section>

      <p className="text-sm text-[#4a5f86]">
        <strong>Private internal project</strong>
        <br />
        This work was built for internal production use, so source code and
        detailed implementation materials are not public.
      </p>
    </main>
  );
}
