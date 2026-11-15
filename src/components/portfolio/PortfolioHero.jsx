export default function PortfolioHero() {
  return (
    <div className="text-center pt-16 md:pt-24 pb-12 px-6">
      
      {/* Top Badge */}
      <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
        My Portfolio
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Websites I've <span className="text-blue-500">Built</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
        Here are some of the websites I've designed and developed. Each project reflects my commitment to quality and innovation.
      </p>

    </div>
  );
}