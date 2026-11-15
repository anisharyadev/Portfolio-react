import { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";
import { FaBriefcase, FaPaperPlane } from "react-icons/fa";
import Stats from "./Stats"; // Importing the new Stats component

// Typing Animation
function TypingText() {
  const words = ["digital experiences", "business websites", "modern designs"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="text-cyan-400">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} ml-0.5`}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center pt-20 pb-16 bg-[#0a0a0f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      {/* Main Container */}
      <div className="max-w-[1100px] mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full p-1 bg-[#0a0a0f] border-[3px] border-[#3b82f6] shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <img
              src="/profile.png"
              alt="Anish Aryadev Biswal"
              className="w-full h-full object-cover rounded-full bg-white/5"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Text & Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1117] border border-white/10 text-xs md:text-sm mb-4 text-cyan-400">
            <HiCode className="text-base" />
            <span>Available for Freelance</span>
          </div>

          <p className="text-gray-400 text-sm md:text-base font-medium mb-1">Hi, I'm</p>
          
          {/* Name */}
          <h1 className="text-[1.8rem] md:text-[3rem] font-bold mb-2 text-white leading-tight md:whitespace-nowrap">
            Anish Aryadev Biswal
          </h1>

          {/* Subtitle */}
          <p className="text-[0.95rem] md:text-[1.125rem] text-blue-500 mb-4 font-medium flex flex-wrap justify-center md:justify-start items-center gap-2">
            <span>Engineer by Degree</span>
            <span className="text-gray-600">|</span>
            <span>Designer by Passion</span>
          </p>

          {/* Typing Animation */}
          <h2 className="text-[1.15rem] md:text-[1.75rem] font-bold mb-4 text-white flex items-center gap-2">
            I build <TypingText />
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm md:text-[15px] max-w-[450px] mb-6 leading-[1.8]">
            Mechanical Engineer <span className="text-gray-600">|</span> Web Designer <span className="text-gray-600">|</span> Civil Engineer <br className="hidden md:block" />
            Building websites that help businesses grow. <br className="hidden md:block" />
            Let's create your digital presence together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#2563eb] hover:bg-blue-600 text-white font-medium transition-colors w-full sm:w-auto text-sm"
            >
              <FaBriefcase />
              View My Work
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0f0f15] border border-white/10 hover:bg-[#1a1a24] text-white font-medium transition-colors w-full sm:w-auto text-sm"
            >
              <FaPaperPlane />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Stats Component Rendered Here */}
      <Stats />
      
    </section>
  );
}