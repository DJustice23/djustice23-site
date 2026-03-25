import Link from "next/link";
import projectsData from "@/content/projects.json";
import type { Project } from "@/content/types";

const projects = projectsData as Project[];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-6 px-6 py-10 text-[#243454] lg:px-12">
      <h1 className="text-5xl font-semibold font-[var(--font-display)]">Projects</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded border border-[#7a879f] bg-[#efe9dc] p-4">
            <div className="text-2xl font-[var(--font-display)]">{p.name}</div>
            <p className="mt-1 text-[#2d3f61]">{p.summary}</p>
            <p className="mt-2 text-sm">Impact: {p.impact}</p>
            <p className="mt-1 text-xs text-[#4a5f86]">Stack: {p.stack.join(", ")}</p>
            <div className="mt-3 flex gap-3 text-sm underline">
              <Link href={`/projects/${p.slug}`}>Case study</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
