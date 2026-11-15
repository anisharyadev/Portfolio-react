import { FaMusic, FaCode, FaRocket, FaQuoteLeft } from "react-icons/fa";

export default function Passion() {
  return (
    <section id="passion" className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Background text - Scaled down for mobile and hidden overflow */}
      <div className="absolute top-10 left-0 text-[80px] md:text-[200px] font-black text-white/[0.02] whitespace-nowrap -z-10 select-none pointer-events-none tracking-tighter">
        PASSION & PURPOSE
      </div>

      <div className="absolute top-1/2 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-600/5 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-6 md:mb-8 group">
              <span className="text-blue-500 text-sm font-bold tracking-widest uppercase">
                My Passion
              </span>
              <div className="h-[1px] w-12 bg-blue-500/50 group-hover:w-20 transition-all duration-500"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Building for <br />
              <span className="text-blue-500 relative inline-block">
                Growth.
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></span>
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 pr-0 lg:pr-12 font-light">
              <p>
                I believe in creating digital experiences that help businesses grow. 
                Whether it's a simple website for a coffee shop or a complex SaaS platform, 
                I bring the same level of dedication and creativity to every project.
              </p>
              <p>
                When I'm not coding, I'm either exploring new technologies or 
                listening to music. It's the perfect balance between structure and 
                creativity — engineering precision meets design innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-6">
              {[
                { icon: <FaMusic />, text: "Music Lover" },
                { icon: <FaCode />, text: "Code Enthusiast" },
                { icon: <FaRocket />, text: "Growth Builder" }
              ].map((tag, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-gray-300 font-medium text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#111116] border border-white/5 hover:border-blue-500/30 hover:bg-[#16161d] transition-all duration-300 cursor-default group"
                >
                  <span className="text-blue-500 group-hover:scale-110 transition-transform">{tag.icon}</span> 
                  {tag.text}
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Quote */}
          <div className="lg:col-span-5 relative flex items-center mt-8 lg:mt-0">
            <div className="relative w-full pl-6 md:pl-0">
              
              {/* Vertical Line - Adjusted for mobile padding */}
              <div className="absolute left-0 md:-left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[3px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              </div>

              <FaQuoteLeft className="text-4xl md:text-6xl text-blue-500/20 mb-4 md:mb-8" />
              
              <blockquote className="text-lg sm:text-xl md:text-3xl text-gray-300 font-medium leading-[1.6] md:leading-[1.5] mb-6 md:mb-10">
                Engineering is the art of making things work. Design is the art of making things beautiful. <span className="text-white italic relative">I do both.</span>
              </blockquote>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-blue-500 font-bold text-lg md:text-xl">
                  A
                </div>
                <div>
                  <p className="text-white font-bold text-base md:text-lg">Anish Aryadev Biswal</p>
                  <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase mt-1">Engineer & Designer</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}