type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10",
        "bg-slate-900/30 backdrop-blur-xl",
        "shadow-[0_12px_30px_rgba(0,0,0,0.25)]",
        "p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
