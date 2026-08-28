type ContentCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentCard({
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/15",
        "bg-[#312e67]",
        "shadow-[0_12px_30px_rgba(24,20,62,0.24)]",
        "p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
