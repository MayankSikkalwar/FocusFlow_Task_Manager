import { useNavigate } from "react-router-dom";

import HeroOrb from "./HeroOrb";
import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Orb Background */}
      <HeroOrb />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <HeroText />
        <HeroCTA />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
          <span className="text-sm font-medium">FocusFlow</span>
        </div>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/sign-in")}
          className="
            rounded-full
            bg-white/5
            px-4 py-2
            text-sm
            text-white/80
            backdrop-blur-md
            transition
            hover:bg-white/10
          "
        >
          Sign In
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
