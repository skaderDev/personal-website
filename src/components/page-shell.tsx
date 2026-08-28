type PageShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <section className="mt-6 sm:mt-10">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
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
