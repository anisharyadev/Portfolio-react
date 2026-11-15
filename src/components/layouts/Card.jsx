import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Card({ project }) {
  const isLive = project.status === "Live";

  return (
    <div className="group relative bg-[#111116] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 h-full">
      
      {/* Image Container */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden bg-[#1a1a24]">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent opacity-90" />

        {/* Status Badge */}
        <div className="absolute top-4 md:top-5 right-4 md:right-5">
          <span className={`inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase backdrop-blur-md border shadow-lg ${
            isLive 
              ? "bg-green-500/20 text-green-300 border-green-500/30" 
              : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
          }`}>
            <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse ${isLive ? "bg-green-400" : "bg-yellow-400"}`}></span>
            {isLive ? "Live" : "In Progress"}
          </span>
        </div>

        {/* Tech Tags */}
        <div className="absolute top-4 md:top-5 left-4 md:left-5 flex gap-2">
          {project.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold bg-black/60 backdrop-blur-md text-gray-200 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
          {project.desc}
        </p>

        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-between w-full px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
            project.url === "#" 
              ? "bg-[#1a1a24] text-gray-500 cursor-not-allowed border border-white/5" 
              : "bg-blue-600 hover:bg-blue-500 text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          }`}
        >
          <span>{project.url === "#" ? "Coming Soon" : "View Live Project"}</span>
          {project.url === "#" ? <FaCode /> : <FaExternalLinkAlt className="text-xs md:text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
        </a>
      </div>

    </div>
  );
}