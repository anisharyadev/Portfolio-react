import { useState } from "react";
import { useData } from "../context/DataContext"; // Import context
import PortfolioHero from "../components/portfolio/PortfolioHero";
import Card from "../components/layouts/Card";

const filterTabs = [
  { label: "All Projects", value: "All" },
  { label: "Live", value: "Live" },
  { label: "In Development", value: "In Development" },
];

export default function Portfolio() {
  const { projects } = useData(); // Get dynamic projects
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getCount = (filterValue) => {
    if (filterValue === "All") return projects.length;
    return projects.filter(p => p.category === filterValue).length;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-24 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none" />
      <PortfolioHero />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center md:justify-center gap-2 md:gap-3 mb-12 md:mb-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105" 
                    : "bg-[#111116] text-gray-400 border border-white/10 hover:border-white/30 hover:text-white hover:bg-[#1a1a24]"
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold ${
                  isActive ? "bg-black/10 text-black" : "bg-white/10 text-gray-400"
                }`}>
                  {getCount(tab.value)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-[fadeIn_0.5s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            No projects found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}