import { cn } from "@workspace/ui/lib/utils"

type Participant = {
  name: string
  gradient: string
  muted?: boolean
  speaking?: boolean
}

const participants: Participant[] = [
  { name: "Nina J.", gradient: "from-brand-1 to-brand-2", speaking: true },
  { name: "Marco", gradient: "from-brand-2 to-brand-3" },
  { name: "Priya", gradient: "from-brand-3 to-brand-1", muted: true },
  { name: "You", gradient: "from-brand-1 to-brand-3" },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function CallPreview() {
  return (
    <div className="animate-float-slow relative mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-border bg-card/80 p-3 shadow-2xl shadow-brand-2/10 backdrop-blur-xl">
        {/* window chrome */}
        <div className="flex items-center justify-between px-2 pb-3 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-500">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live · 24:08
          </div>
        </div>

        {/* participant grid */}
        <div className="grid grid-cols-2 gap-2">
          {participants.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br",
                p.gradient,
                p.speaking && "ring-2 ring-emerald-400 ring-offset-2 ring-offset-card",
              )}
            >
              <div className="absolute inset-0 bg-black/10" />
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white/95">
                {initials(p.name)}
              </span>
              <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-md bg-black/35 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                {p.muted ? (
                  <MicOffIcon className="size-3" />
                ) : (
                  <MicIcon className="size-3" />
                )}
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* control bar */}
        <div className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-secondary/60 p-2">
          <ControlButton label="Mic">
            <MicIcon className="size-4" />
          </ControlButton>
          <ControlButton label="Camera">
            <CameraIcon className="size-4" />
          </ControlButton>
          <ControlButton label="Share">
            <ShareIcon className="size-4" />
          </ControlButton>
          <button
            type="button"
            aria-label="Leave call"
            className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-xl bg-destructive px-3 text-xs font-medium text-destructive-foreground"
          >
            <PhoneIcon className="size-4" />
            Leave
          </button>
        </div>
      </div>

      {/* floating caption chip */}
      <div className="animate-float absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-popover/90 px-3 py-2 text-xs shadow-xl backdrop-blur sm:block [animation-delay:-3s]">
        <span className="text-muted-foreground">Nina:</span>{" "}
        <span className="font-medium">“Let&apos;s ship it.”</span>
      </div>
    </div>
  )
}

function ControlButton({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-xl bg-background/70 text-foreground transition-colors hover:bg-background"
    >
      {children}
    </button>
  )
}

/* --- inline icons (no external dep) --- */
type IconProps = { className?: string }

function MicIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  )
}

function MicOffIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 3 18 18M9 9v2a3 3 0 0 0 4.5 2.6M15 11V6a3 3 0 0 0-5.6-1.5M5 11a7 7 0 0 0 10.5 6M12 18v3" />
    </svg>
  )
}

function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </svg>
  )
}

function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M9 11l3-3 3 3" />
    </svg>
  )
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.5 9.5C7 4 17 4 21.5 9.5c.7.85.5 2-.4 2.6l-2 1.3c-.7.45-1.6.36-2.2-.22l-1.3-1.3a1.7 1.7 0 0 1-.4-1.7l.2-.6c-1.9-.7-4-.7-5.9 0l.2.6c.18.6.02 1.26-.4 1.7l-1.3 1.3c-.6.58-1.5.67-2.2.22l-2-1.3c-.9-.6-1.1-1.75-.4-2.6Z" />
    </svg>
  )
}

export { CallPreview }
