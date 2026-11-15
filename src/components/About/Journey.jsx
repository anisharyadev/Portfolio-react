import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const journeyData = [
  {
    year: "2022 - 2025",
    title: "Mechanical Engineering",
    desc: "Graduated as a Mechanical Engineer with a strong foundation in problem-solving, analysis, and design principles. This engineering mindset shaped my approach to building digital solutions.",
    tags: ["Problem Solving", "Analysis", "Design Thinking"],
    icon: <FaGraduationCap />,
    active: false,
  },
  {
    year: "2023 - Present",
    title: "Web Design & Development",
    desc: "Discovered the world of web design and fell in love with creating digital experiences. Started with HTML, CSS, and JavaScript, and now building React-based SaaS projects. I enjoy coding while listening to music — it's my creative zone.",
    tags: ["HTML/CSS/JS", "React", "SaaS"],
    icon: <FaLaptopCode />,
    active: true, 
  },
  {
    year: "2025 - Present",
    title: "Building for Growth",
    desc: "Now focused on creating websites and digital experiences that help businesses grow. From simple business websites to complex platforms, I bring engineering precision to every project.",
    tags: ["Business Websites", "E-Commerce", "Digital Presence"],
    icon: <FaRocket />,
    active: false,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How It All Started
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            From mechanical engineering to web design — a story of passion and purpose.
          </p>
        </div>

        {/* Timeline - Adjusted left spacing for mobile */}
        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-10 md:space-y-12 pb-8">
          {journeyData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Dot/Icon - Scaled down for mobile */}
              <div className={`absolute -left-[20px] md:-left-[25px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0f] border-2 transition-all duration-300 z-10 ${
                item.active 
                  ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] text-blue-400 scale-110" 
                  : "border-white/20 text-gray-500 group-hover:border-blue-500/50 group-hover:text-blue-500"
              }`}>
                <span className="text-sm md:text-lg">{item.icon}</span>
              </div>

              {/* Card Content */}
              <div className={`bg-[#111116] border rounded-2xl p-5 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                item.active 
                  ? "border-blue-500/50 shadow-[0_5px_30px_rgba(59,130,246,0.1)]" 
                  : "border-white/5 hover:border-white/20 hover:shadow-lg"
              }`}>
                
                <span className={`text-xs font-bold tracking-wider mb-2 md:mb-3 block ${
                  item.active ? "text-blue-400" : "text-gray-500"
                }`}>
                  {item.year}
                </span>
                
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-[15px] leading-[1.8] mb-5 md:mb-6">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-medium rounded-lg border transition-colors ${
                        item.active
                          ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                          : "bg-white/5 text-gray-400 border-white/10 group-hover:border-white/20"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}