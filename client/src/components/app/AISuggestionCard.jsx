export default function AISuggestionCard({ text }) {
  return (
    <div
      className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-lg
        p-3
      "
    >
      <p className="text-xs text-slate-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
