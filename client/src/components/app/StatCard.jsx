export default function StatCard({ label, value }) {
  return (
    <div
      className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-xl
        px-4 py-3
      "
    >
      <p className="text-xs text-slate-400">{label}</p>

      <p className="text-2xl font-semibold text-slate-100 mt-1">{value}</p>
    </div>
  );
}
