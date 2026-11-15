import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Solo Trip India",
    desc: "AI-powered travel planning platform with route optimization.",
    tags: ["React", "AI", "API"],
    url: "https://www.solotripindia.in",
  },
  {
    title: "Chocolate Shop E-Commerce",
    desc: "Online store with integrated WhatsApp ordering system.",
    tags: ["React", "WhatsApp API"],
    url: "https://chocolate-delight.aryadev.in/",
  },
  {
    title: "Fleet Track Service",
    desc: "Fleet management and tracking service platform.",
    tags: ["React", "Node.js"],
    url: "https://fleettrackservice.in",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Some of the websites I've built for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#111116] border border-white/5 p-6 rounded-2xl flex flex-col hover:bg-[#16161d] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex justify-end mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                  Live
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-[11px] font-medium rounded-md border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              >
                Visit <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Outlined Button that fills on hover */}
        <div className="mt-12 text-center">
          <a 
            href="#portfolio" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects <FaArrowRight className="text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
}