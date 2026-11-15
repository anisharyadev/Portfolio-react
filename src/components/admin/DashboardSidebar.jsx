import { FaProjectDiagram, FaCode, FaStar, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function DashboardSidebar({ activeTab, setActiveTab, handleLogout }) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <FaProjectDiagram /> },
    { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "testimonials", label: "Testimonials", icon: <FaStar /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-full md:w-64 bg-[#111116] border-r border-white/5 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-8 tracking-tight">
          Admin<span className="text-blue-500">.</span>
        </h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-[#1a1a24] hover:text-white"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors text-sm font-medium mt-6"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}