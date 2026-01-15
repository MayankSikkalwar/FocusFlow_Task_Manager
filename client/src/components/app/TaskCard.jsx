export default function TaskCard({
  title,
  description,
  tag,
  completed,
  onToggle,
  onDelete,
}) {
  return (
    <div
      className={`
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-xl
        p-4
        transition
        hover:bg-white/8
        hover:-translate-y-0.5
        ${completed ? "opacity-50" : ""}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`
            w-4 h-4 rounded-full border
            flex items-center justify-center
            transition
            ${
              completed
                ? "bg-indigo-500 border-indigo-500"
                : "border-indigo-400/60"
            }
          `}
        >
          {completed && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </button>

        {/* Task content */}
        <div className="flex-1">
          <h3
            className={`
              text-sm font-medium
              ${
                completed
                  ? "line-through text-slate-400"
                  : "text-slate-100"
              }
            `}
          >
            {title}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            {description}
          </p>

          <div className="mt-2">
            <span className="text-[11px] text-indigo-400">
              {tag}
            </span>
          </div>
        </div>

        {/* Delete */}
        <button
          onClick={onDelete}
          className="
            text-xs
            text-slate-500
            hover:text-red-400
            transition
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
