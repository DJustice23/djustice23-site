"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { FaChartLine, FaCloudSun, FaHeadphones, FaWaveSquare } from "react-icons/fa6";
import { HiOutlineClock, HiOutlineSignal, HiOutlineSparkles } from "react-icons/hi2";

type SiteInfoResponse = {
  generatedAt: string;
  locationTimeZone: string;
  weather: {
    status: "live" | "unavailable";
    location: string;
    temperatureF: number | null;
    condition: string | null;
    windMph: number | null;
    updatedAt: string | null;
  };
  spotify: {
    status: "playing" | "paused" | "idle" | "unavailable";
    track: string | null;
    artist: string | null;
    album: string | null;
    albumArtUrl: string | null;
    trackUrl: string | null;
    progressMs: number | null;
    durationMs: number | null;
  };
  analytics: {
    status: "connected" | "disconnected";
    provider: string;
    visitorsToday: number | null;
    visitorsWeek: number | null;
    liveVisitors: number | null;
    topPage: string | null;
    avgMinutes: number | null;
    trend: number[];
    note: string;
  };
};

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return (await response.json()) as SiteInfoResponse;
};

function formatLocalTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function formatLongDate(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatDuration(minutes: number | null) {
  if (minutes === null) {
    return "Awaiting data";
  }

  return `${minutes.toFixed(1)} min`;
}

function formatUpdatedAt(value: string | null, timeZone: string) {
  if (!value) {
    return "Offline";
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function renderTrendBars(trend: number[]) {
  if (trend.length === 0) {
    return (
      <div className="flex h-18 items-end gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className="h-6 flex-1 rounded-full bg-[color:color-mix(in_srgb,var(--line)_68%,white)]"
          />
        ))}
      </div>
    );
  }

  const max = Math.max(...trend, 1);

  return (
    <div className="flex h-18 items-end gap-2">
      {trend.map((value, index) => (
        <span
          key={`${value}-${index}`}
          className="flex-1 rounded-full bg-[var(--foreground)]/80"
          style={{ height: `${Math.max((value / max) * 72, 12)}px` }}
        />
      ))}
    </div>
  );
}

export default function SiteInfoDashboard() {
  const { data, error, isLoading } = useSWR<SiteInfoResponse>(
    "/api/site-info/live",
    fetcher,
    {
      refreshInterval: 300000,
      revalidateOnFocus: false,
    },
  );
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const timeZone = data?.locationTimeZone ?? "America/New_York";
  const weather = data?.weather;
  const spotify = data?.spotify;
  const analytics = data?.analytics;

  return (
    <div className="mt-10 grid gap-6">
      <section className="overflow-hidden border border-[var(--line)] bg-[linear-gradient(140deg,rgba(39,53,86,0.1),rgba(246,243,234,0.96)_45%,rgba(39,53,86,0.05))]">
        <div className="grid gap-8 px-6 py-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)]/70 bg-white/45 px-3 py-1 text-[0.8rem] uppercase tracking-[0.16em] text-[var(--foreground-soft)]">
              <HiOutlineSparkles className="h-4 w-4" />
              Live Site Layer
            </div>
            <h2 className="mt-4 max-w-[14ch] text-[2.4rem] leading-[0.95] tracking-[0.015em] text-[var(--foreground)] sm:text-[3rem]">
              A portfolio page with operational signals
            </h2>
            <p className="mt-4 max-w-[50ch] text-[1.02rem] leading-[1.7] text-[var(--foreground-soft)] sm:text-[1.08rem]">
              This page acts more like a product surface than a static
              explanation page. Weather, music, and traffic hooks make the site
              feel alive while keeping the UI restrained and useful.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[var(--line)] bg-[var(--surface)]/88 px-5 py-5">
              <div className="flex items-center gap-2 text-[0.85rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                <HiOutlineClock className="h-4 w-4" />
                Mills River Time
              </div>
              <p className="mt-4 text-[2.1rem] leading-none text-[var(--foreground)]">
                {formatLocalTime(now, timeZone)}
              </p>
              <p className="mt-2 text-[0.98rem] text-[var(--foreground-soft)]">
                {formatLongDate(now, timeZone)}
              </p>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)]/88 px-5 py-5">
              <div className="flex items-center gap-2 text-[0.85rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                <HiOutlineSignal className="h-4 w-4" />
                Feed Status
              </div>
              <p className="mt-4 text-[2.1rem] leading-none text-[var(--foreground)]">
                {error ? "Degraded" : isLoading ? "Syncing" : "Healthy"}
              </p>
              <p className="mt-2 text-[0.98rem] leading-[1.55] text-[var(--foreground-soft)]">
                Weather is public. Spotify and analytics become richer when
                their env vars are configured.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <article className="section-line bg-[var(--surface)] px-6 py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaCloudSun className="h-5 w-5 text-[var(--foreground)]" />
                <h3 className="text-[1.5rem] leading-none text-[var(--foreground)]">
                  Local Conditions
                </h3>
              </div>
              <span className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                {weather?.status === "live" ? "Live" : "Fallback"}
              </span>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-end">
              <p className="text-[3.2rem] leading-none text-[var(--foreground)]">
                {weather?.temperatureF !== null && weather?.temperatureF !== undefined
                  ? `${Math.round(weather.temperatureF)}°`
                  : "--"}
              </p>
              <div>
                <p className="text-[1.08rem] text-[var(--foreground)]">
                  {weather?.condition ?? "Weather feed unavailable"}
                </p>
                <p className="mt-1 text-[0.98rem] text-[var(--foreground-soft)]">
                  {weather?.location ?? "Mills River, NC"} · Wind{" "}
                  {weather?.windMph !== null && weather?.windMph !== undefined
                    ? `${Math.round(weather.windMph)} mph`
                    : "--"}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[0.92rem] text-[var(--foreground-soft)]">
              Updated {formatUpdatedAt(weather?.updatedAt ?? null, timeZone)}
            </p>
          </article>

          <article className="section-line bg-[var(--surface)] px-6 py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaHeadphones className="h-5 w-5 text-[var(--foreground)]" />
                <h3 className="text-[1.5rem] leading-none text-[var(--foreground)]">
                  Spotify Pulse
                </h3>
              </div>
              <span className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                {spotify?.status === "playing"
                  ? "Playing"
                  : spotify?.status === "paused"
                    ? "Paused"
                    : spotify?.status === "idle"
                      ? "Idle"
                      : "Setup optional"}
              </span>
            </div>

            {spotify?.track ? (
              <div className="mt-5 flex gap-4">
                <div className="h-18 w-18 shrink-0 overflow-hidden border border-[var(--line)] bg-[var(--background)]">
                  {spotify.albumArtUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={spotify.albumArtUrl}
                      alt={`${spotify.album ?? spotify.track} album art`}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-[1.12rem] text-[var(--foreground)]">
                    {spotify.track}
                  </p>
                  <p className="mt-1 text-[0.98rem] text-[var(--foreground-soft)]">
                    {spotify.artist}
                  </p>
                  <p className="mt-3 text-[0.92rem] text-[var(--foreground-soft)]">
                    {spotify.album}
                  </p>
                  {spotify.trackUrl ? (
                    <a
                      className="mt-3 inline-flex text-[0.95rem] font-medium text-[var(--foreground)] underline"
                      href={spotify.trackUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Spotify
                    </a>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="mt-5 max-w-[42ch] text-[1rem] leading-[1.65] text-[var(--foreground-soft)]">
                Connect Spotify credentials to show the currently playing track,
                or leave this as a clean idle card when music data is not part
                of the story you want the site to tell.
              </p>
            )}
          </article>
        </div>

        <article className="section-line bg-[var(--surface)] px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaChartLine className="h-5 w-5 text-[var(--foreground)]" />
              <h3 className="text-[1.5rem] leading-none text-[var(--foreground)]">
                Traffic Snapshot
              </h3>
            </div>
            <span className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
              {analytics?.provider ?? "Analytics shell"}
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="border border-[var(--line)] bg-white/45 px-4 py-4">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                Visitors Today
              </p>
              <p className="mt-3 text-[2.2rem] leading-none text-[var(--foreground)]">
                {analytics?.visitorsToday ?? "--"}
              </p>
            </div>
            <div className="border border-[var(--line)] bg-white/45 px-4 py-4">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                This Week
              </p>
              <p className="mt-3 text-[2.2rem] leading-none text-[var(--foreground)]">
                {analytics?.visitorsWeek ?? "--"}
              </p>
            </div>
            <div className="border border-[var(--line)] bg-white/45 px-4 py-4">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                Live Now
              </p>
              <p className="mt-3 text-[2.2rem] leading-none text-[var(--foreground)]">
                {analytics?.liveVisitors ?? "--"}
              </p>
            </div>
            <div className="border border-[var(--line)] bg-white/45 px-4 py-4">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                Avg. Session
              </p>
              <p className="mt-3 text-[2.2rem] leading-none text-[var(--foreground)]">
                {formatDuration(analytics?.avgMinutes ?? null)}
              </p>
            </div>
          </div>

          <div className="mt-6 border border-[var(--line)] bg-white/45 px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
                Interest Trend
              </p>
              <FaWaveSquare className="h-4 w-4 text-[var(--foreground-soft)]" />
            </div>
            <div className="mt-5">{renderTrendBars(analytics?.trend ?? [])}</div>
          </div>

          <div className="mt-6 border border-[var(--line)] bg-white/45 px-4 py-4">
            <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--foreground-soft)]">
              Most Explored Right Now
            </p>
            <p className="mt-3 text-[1.25rem] leading-[1.4] text-[var(--foreground)]">
              {analytics?.topPage ?? "Connect analytics to reveal the most explored project or page."}
            </p>
            <p className="mt-3 max-w-[48ch] text-[0.98rem] leading-[1.65] text-[var(--foreground-soft)]">
              {analytics?.note ??
                "This section is designed to accept a real analytics feed when you are ready to plug one in."}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
