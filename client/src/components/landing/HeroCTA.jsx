import { useNavigate } from "react-router-dom";

const HeroCTA = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/sign-in")}
      className="
        mt-4
        flex items-center gap-3
        rounded-full
        border border-indigo-500/40
        bg-white/5
        px-8 py-4
        text-sm sm:text-base
        backdrop-blur-md
        transition
        hover:bg-white/10
      "
    >
      Enter Flow State
      <span className="text-indigo-400 text-lg">→</span>
    </button>
  );
};

export default HeroCTA;
