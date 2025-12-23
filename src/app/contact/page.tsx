import PageShell from "../shared/page-shell";
import GlassCard from "../shared/glass-card";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="If you want to reach out, this is the cleanest way."
    >
      <GlassCard>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-white">Say hi</h2>
            <p className="mt-2 text-white/70">
              Email is best. You can also find me on GitHub / LinkedIn.
            </p>

            <div className="mt-4 space-y-2 text-white/80">
              <p>
                <span className="text-white/60">Email: </span>
                your.email@example.com
              </p>
              <p>
                <span className="text-white/60">Location: </span>
                United States
              </p>
            </div>
          </div>

          {/* placeholder form (no backend yet) */}
          <form className="space-y-4">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20"
              placeholder="Your email"
            />
            <textarea
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20"
              placeholder="Message"
            />

            <button
              type="button"
              className="rounded-xl bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Send (wire up later)
            </button>
          </form>
        </div>
      </GlassCard>
    </PageShell>
  );
}
