const HeroOrb = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
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

