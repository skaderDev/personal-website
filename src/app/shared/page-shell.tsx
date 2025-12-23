type PageShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <section className="mt-10">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 text-white/70">{subtitle}</p>
        ) : null}
      </header>

      <div className="space-y-6">{children}</div>
    </section>
  );
}
