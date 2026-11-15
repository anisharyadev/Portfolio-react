import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

export default function ProjectsSection({ 
  projects, 
  searchQuery, 
  setSearchQuery, 
  openModal, 
  deleteProject 
}) {
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111116] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors text-sm"
        >
          <FaPlus /> Add New Project
        </button>
      </div>

      <div className="bg-[#111116] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1a1a24] text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={project.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-[#1a1a24]" />
                    <span className="font-medium text-white text-sm">{project.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">{project.category}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    project.status === "Live" 
                      ? "bg-green-500/10 text-green-400" 
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button onClick={() => openModal(project)} className="text-blue-400 hover:text-blue-300"><FaEdit /></button>
                  <button onClick={() => deleteProject(project.id)} className="text-red-400 hover:text-red-300"><FaTrash /></button>
                </td>
              </tr>
            ))}
            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}