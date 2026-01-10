import StatCard from "../components/app/StatCard";

export default function Dashboard() {
  // Mock data (backend later)
  const stats = {
    total: 8,
    completed: 3,
    pending: 5,
  };

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-100">
          Good evening 👋
        </h1>
        <p className="text-slate-400 mt-1">
          Let’s focus on what matters today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Total Tasks" value={stats.total} />
        <StatCard label="Completed" value={stats.completed} />
        <StatCard label="Pending" value={stats.pending} />
      </div>
    </div>
  );
}
