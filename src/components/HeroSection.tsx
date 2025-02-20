const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-bl from-purple-600/20 via-blue-600/20 to-green-600/20 blur-3xl"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Build your
            <span className="block">
              <span className="text-[#5AC8FA]">team</span> the
            </span>
            <span className="block">easy way</span>
          </h1>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Our vast experience, thought leadership and commitment to
            digitization invetion
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-sm mb-8">
              <span className="text-md font-medium"> Start Free Trial</span>
            </div>
            <p className="text-white/70 text-sm">
              High degree of the sensitivity and specificity to prescribe
              recommended actions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
