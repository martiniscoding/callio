import { cn } from "@workspace/ui/lib/utils"

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 via-brand-2 to-brand-3 text-primary-foreground shadow-lg shadow-brand-2/30",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-5"
        aria-hidden="true"
      >
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h6A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-6A2.5 2.5 0 0 1 4 16.5v-9Z"
          fill="currentColor"
        />
        <path
          d="m16 10 3.2-2.1c.66-.44 1.55.03 1.55.82v6.56c0 .79-.89 1.26-1.55.82L16 14v-4Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </span>
  )
}

function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showText && (
        <span className="text-lg font-semibold tracking-tight">Callio</span>
      )}
    </span>
  )
}

export { Logo, LogoMark }
