export default function OverviewSection({ projects }) {
  const totalProjects = projects.length;
  const liveProjects = projects.filter((p) => p.status === "Live").length;
  const inDevProjects = projects.filter((p) => p.status === "In Development").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#111116] border border-white/5 p-6 rounded-2xl">
        <p className="text-gray-400 text-sm mb-2">Total Projects</p>
        <h3 className="text-4xl font-bold text-white">{totalProjects}</h3>
      </div>
      <div className="bg-[#111116] border border-white/5 p-6 rounded-2xl">
        <p className="text-gray-400 text-sm mb-2">Live Projects</p>
        <h3 className="text-4xl font-bold text-green-400">{liveProjects}</h3>
      </div>
      <div className="bg-[#111116] border border-white/5 p-6 rounded-2xl">
        <p className="text-gray-400 text-sm mb-2">In Development</p>
        <h3 className="text-4xl font-bold text-yellow-400">{inDevProjects}</h3>
      </div>
    </div>
  );
}