import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroText = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }, []);

  return (
    <div className="mb-12">
      <h1
        ref={titleRef}
        className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
      >
        FocusFlow
      </h1>

      <p
        ref={subtitleRef}
        className="mt-4 text-sm sm:text-base tracking-[0.3em] text-white/60"
      >
        MASTER YOUR MOMENTUM.
      </p>
    </div>
  );
};

export default HeroText;

