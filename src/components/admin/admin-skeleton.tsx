export function AdminPageSkeleton({
  label = "Loading admin data",
  rows = 3,
}: {
  label?: string;
  rows?: number;
}) {
  return (
    <div aria-busy="true" className="mt-8 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-2xl border border-brand-line bg-white/80"
          />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="h-40 animate-pulse rounded-2xl border border-brand-line bg-white/70"
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}
