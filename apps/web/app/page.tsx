import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

import { AuroraBackground } from "@/components/aurora-background"
import { Logo } from "@/components/logo"
import { CallPreview } from "@/components/call-preview"
import Navbar from "@/components/Navbar"

const features = [
  {
    title: "HD video, zero lag",
    body: "Adaptive 1080p that holds up on hotel wifi. Callio tunes bitrate per participant in real time.",
    icon: (
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h6A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-6A2.5 2.5 0 0 1 4 16.5v-9Zm12 2.5 3.2-2.1c.66-.44 1.55.03 1.55.82v6.56c0 .79-.89 1.26-1.55.82L16 14v-4Z" />
    ),
  },
  {
    title: "Live transcription",
    body: "Searchable captions and AI summaries land in your inbox the moment you hang up.",
    icon: (
      <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2Zm2 5h10M7 12h6" />
    ),
  },
  {
    title: "Rooms that scale",
    body: "From a 1:1 to a 500-person town hall with breakout rooms, all on one link.",
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 8a8 8 0 0 0-16 0M18 8a3 3 0 1 0 0-6M22 18a6 6 0 0 0-3-5" />
    ),
  },
  {
    title: "End-to-end encrypted",
    body: "Every frame and packet is encrypted in transit. Your meetings stay yours.",
    icon: (
      <path d="M6 10V8a6 6 0 1 1 12 0v2m-13 0h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm7 4v3" />
    ),
  },
]

const stats = [
  { value: "<40ms", label: "median latency" },
  { value: "1080p", label: "adaptive video" },
  { value: "500", label: "per room" },
  { value: "99.99%", label: "uptime" },
]

export default function LandingPage() {
  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <AuroraBackground />
      <Navbar></Navbar>
      {/* Hero */}
      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-2" />
              New · AI meeting summaries
            </span>

            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Meetings that feel
              <br />
              <span className="text-gradient">closer than the room.</span>
            </h1>

            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Callio is the video calling platform for teams who care about the
              little things — crystal audio, instant rooms, and zero friction.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/register">Start a call — it&apos;s free</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login">Sign in</Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xl font-semibold tracking-tight">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="preview" className="animate-rise [animation-delay:120ms]">
            <CallPreview />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you expect.
              <span className="text-muted-foreground"> Nothing you don&apos;t.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-brand-2/50 hover:bg-card"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-1 group-hover:to-brand-3 group-hover:text-primary-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-16">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-8 py-14 text-center backdrop-blur sm:px-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-1/15 via-transparent to-brand-3/15" />
            <h2 className="mx-auto max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next meeting is one link away.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              No downloads, no friction. Spin up a room and share the link.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/register">Create your free account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} Callio. Crafted with care.</p>
      </footer>
    </div>
  )
}
