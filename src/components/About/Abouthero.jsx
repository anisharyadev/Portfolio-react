import { FaBriefcase, FaCode, FaClock, FaCheckCircle } from "react-icons/fa";

export default function Abouthero() {
  return (
    <section id="about" className="relative min-h-[80vh] flex items-center pt-24 pb-12 md:pt-12 md:pb-16 bg-[#0a0a0f] overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1100px] mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          
          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-5">
            About Me
          </div>

          {/* Heading */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-white leading-[1.2] mb-5 tracking-tight">
            Engineer by Degree,<br />
            <span className="text-blue-500">Designer by Passion</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-[1.8] mb-6 max-w-[480px]">
            I'm <strong className="text-white font-semibold">Anish Aryadev Biswal</strong> from <strong className="text-white font-semibold">Bhubaneswar, Odisha, India</strong>. A Mechanical Engineer who discovered the art of web design and never looked back. I build websites that help businesses grow.
          </p>

          {/* 1 min read */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-8 bg-[#16161d] px-4 py-1.5 rounded-full border border-white/5">
            <FaClock className="text-xs" />
            <span>1 min read</span>
          </div>

          {/* Buttons - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#journey"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-blue-600 text-white font-medium transition-all duration-300 w-full sm:w-auto text-sm"
            >
              <FaBriefcase className="text-sm" />
              My Journey
            </a>
            <a
              href="#skills"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111116] border border-white/10 hover:bg-[#1a1a24] hover:border-white/20 text-white font-medium transition-all duration-300 w-full sm:w-auto text-sm"
            >
              <FaCode className="text-sm" />
              My Skills
            </a>
          </div>

        </div>

        {/* Right Side: Image - Responsive scaling */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 relative">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]">
            
            {/* Image Circle */}
            <div className="w-full h-full rounded-full p-1 bg-[#0a0a0f] border-[3px] border-[#3b82f6] shadow-[0_0_40px_rgba(59,130,246,0.25)] overflow-hidden">
              <img
                src="/profile.png"
                alt="Anish Aryadev Biswal"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>

            {/* Floating Badge - Adjusted position for mobile */}
            <div className="absolute -bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 bg-[#111116] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl whitespace-nowrap">
              <FaCheckCircle className="text-green-500 text-xs md:text-sm" />
              <span className="text-white text-xs md:text-sm font-medium">Available for Freelance</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}