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
        "content-card rounded-2xl",
        "p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
