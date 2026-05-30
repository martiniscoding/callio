import Link from "next/link"

import { AuroraBackground } from "@/components/aurora-background"
import { Logo } from "@/components/logo"

const quotes = [
  {
    text: "We replaced three tools with Callio in a week. Our standups have never been smoother.",
    name: "Nina Jaswal",
    role: "Head of Product, Northwind",
  },
]

function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  footer: React.ReactNode
}) {
  const quote = quotes[0]!

  return (
    <div className="relative grid min-h-svh lg:grid-cols-2">
      <AuroraBackground />

      {/* Showcase panel */}
      <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-border/60 bg-card/40 p-12  backdrop-blur-xl lg:flex">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-1/10 via-transparent to-brand-3/10 " />
        <Link href="/" className="w-fit">
          <Logo />
        </Link>

        <div className="max-w-fit ml-20">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight">
            The fastest way to be{" "}
            <span className="text-gradient">face to face.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            One link, instant rooms, and audio so clear it disappears. Welcome
            back to Callio.
          </p>

          <figure className="mt-10 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
            <blockquote className="text-sm leading-relaxed">
              “{quote.text}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-1 to-brand-3 text-xs font-semibold text-white">
                NJ
              </span>
              <span className="text-sm">
                <span className="block font-medium">{quote.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {quote.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Callio
        </p>
      </aside>

      {/* Form panel */}
      <main className="flex items-center justify-center px-6 py-12">
        <div className="animate-rise w-full max-w-sm">
          <Link href="/" className="mb-8 inline-flex lg:hidden">
            <Logo />
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </div>
      </main>
    </div>
  )
}

export { AuthShell }
