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
        "content-card",
        className,
      ].join(" ")}
      data-reveal
    >
      {children}
    </div>
  );
}
