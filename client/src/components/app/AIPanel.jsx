import AISuggestionCard from "./AISuggestionCard";

export default function AIPanel({ open }) {
  if (!open) return null;

  return (
    <aside
      className="
        w-90
        h-full
        border-l border-white/15
        bg-white/7
        backdrop-blur-xl
        p-5
      "
    >
      {/* Header
      <div className="mb-4">
        <h2 className="text-xs tracking-wider text-slate-400 uppercase">
          FocusFlow AI
        </h2>
      </div> */}
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-sm font-medium text-slate-200">FocusFlow AI</h2>
        <p className="text-xs text-slate-400 mt-1">
          Quiet suggestions to help you focus
        </p>
      </div>

      {/* Suggestions */}
      <div className="space-y-3">
        <AISuggestionCard text="You have 3 pending tasks. Consider starting with the smallest one to build momentum." />
        <AISuggestionCard text="Your learning tasks are usually completed in the morning. This might be a good time to focus." />
        <AISuggestionCard text="Staying consistent matters more than doing everything. Pick one task and begin." />
      </div>

      {/* Input placeholder */}
      <div className="mt-6">
        <input
          disabled
          placeholder="AI assistance coming soon…"
          className="
            w-full
            bg-white/5
            border border-white/10
            rounded-md
            px-3 py-2
            text-xs
            text-slate-400
            placeholder:text-slate-500
            cursor-not-allowed
          "
        />
      </div>
    </aside>
  );
}
