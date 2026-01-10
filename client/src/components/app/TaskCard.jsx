export default function TaskCard({ title, description, tag }) {
  return (
    <div
      className="
        bg-white/5 
        border border-white/10 
        backdrop-blur-xl 
        rounded-xl 
        p-4 
        transition 
        hover:bg-white/8 
        hover:-translate-y-0.5
      "
    >
      <div className="flex items-start gap-3">
        {/* Checkbox (UI only) */}
        <div className="pt-1">
          <div className="w-4 h-4 rounded-full border border-indigo-400/60" />
        </div>

        {/* Task content */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-slate-100">
            {title}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            {description}
          </p>

          {/* Tag */}
          <div className="mt-2">
            <span className="text-[11px] text-indigo-400">
              {tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
