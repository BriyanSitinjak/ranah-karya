export default function AboutPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm md:px-10 md:py-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          About
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          About Ranah Karya Coming Soon
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          We&apos;re preparing a concise overview of our background, approach,
          and team. In the meantime, the home page and services sections give a
          quick snapshot of what we do.
        </p>
      </div>
    </div>
  );
}


