import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroOrb = () => {
  const orbRef = useRef(null);

  useEffect(() => {
    gsap.to(orbRef.current, {
      scale: 1.06,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
        ref={orbRef}
        className="
          h-105 w-105
          sm:h-130 sm:w-130
          rounded-full
          bg-linear-to-br from-indigo-600/40 via-violet-600/30 to-purple-700/40
          blur-3xl
        "
      />
    </div>
  );
};

export default HeroOrb;


