import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaMobileAlt, 
  FaBrain, FaCogs, FaProjectDiagram 
} from "react-icons/fa";

const allSkills = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Responsive", icon: <FaMobileAlt className="text-blue-400" /> },
  { name: "Problem Solving", icon: <FaBrain className="text-pink-400" /> },
  { name: "Mechanical Eng.", icon: <FaCogs className="text-gray-400" /> },
  { name: "Project Management", icon: <FaProjectDiagram className="text-green-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-[#0a0a0f] relative overflow-hidden flex flex-col items-center">
      
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 w-full">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            My Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            A unique blend of engineering and design expertise.
          </p>
        </div>

        {/* Floating Skills Layout - Adjust gap for mobile */}
        <div className="relative flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mx-auto">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
             <div className="w-[200px] h-[200px] bg-blue-500/20 blur-[80px] rounded-full"></div>
          </div>

          {allSkills.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-[#111116]/80 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-[#1a1a24] transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <span className="text-xl md:text-3xl transition-transform duration-300 group-hover:scale-125">
                {skill.icon}
              </span>
              <span className="text-xs md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}