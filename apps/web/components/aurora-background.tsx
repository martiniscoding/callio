import { cn } from "@workspace/ui/lib/utils"

/**
 * Decorative, non-interactive background: a soft grid overlaid with
 * slowly drifting brand-colored glow blobs. Used on the landing and
 * auth screens to give Callio a cohesive, premium feel.
 */
function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="animate-aurora absolute -top-32 -left-24 size-[34rem] rounded-full bg-brand-1/30 blur-[120px]" />
      <div className="animate-aurora absolute -top-20 right-[-6rem] size-[30rem] rounded-full bg-brand-3/25 blur-[120px] [animation-delay:-6s]" />
      <div className="animate-aurora absolute bottom-[-12rem] left-1/3 size-[36rem] rounded-full bg-brand-2/25 blur-[130px] [animation-delay:-10s]" />
    </div>
  )
}

export { AuroraBackground }
