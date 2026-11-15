export default function ContactHero() {
  return (
    <div className="text-center pt-16 md:pt-24 pb-12 px-6">
      <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-bold tracking-widest text-blue-400 uppercase mb-4">
        Contact
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Let's <span className="text-blue-500">Connect</span>
      </h1>
      <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Have a project in mind or need a website? Let's talk! I'm always open to discussing new projects and opportunities.
      </p>
    </div>
  );
}