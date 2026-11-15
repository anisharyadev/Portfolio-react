import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Admin Components
import DashboardSidebar from "../../components/admin/DashboardSidebar";
import OverviewSection from "../../components/admin/OverviewSection";
import ProjectsSection from "../../components/admin/ProjectsSection";
import ProjectModal from "../../components/admin/ProjectModal";
import TestimonialsSection from "../../components/admin/TestimonialsSection";
import SettingsSection from "../../components/admin/SettingsSection";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { projects, addProject, updateProject, deleteProject } = useData();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "", desc: "", category: "Live", tags: "", image: "", url: "", status: "Live"
  });

  // Protect route
  useEffect(() => {
    if (!user) navigate("/hosting");
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const openModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({ ...project, tags: project.tags.join(", ") });
    } else {
      setEditingProject(null);
      setFormData({ title: "", desc: "", category: "Live", tags: "", image: "", url: "", status: "Live" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, tags: formData.tags.split(",").map(t => t.trim()) };
    if (editingProject) {
      updateProject(editingProject.id, finalData);
    } else {
      addProject(finalData);
    }
    setIsModalOpen(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col md:flex-row">
      
      {/* 1. Sidebar */}
      <DashboardSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        handleLogout={handleLogout} 
      />

      {/* 2. Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
          <div className="text-sm text-gray-400">Welcome, <strong className="text-white">{user.email}</strong></div>
        </div>

        {/* 3. Dynamic Sections */}
        {activeTab === "overview" && <OverviewSection projects={projects} />}

        {activeTab === "projects" && (
          <ProjectsSection 
            projects={projects}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            openModal={openModal}
            deleteProject={deleteProject}
          />
        )}

        {activeTab === "testimonials" && <TestimonialsSection />}
        {activeTab === "settings" && <SettingsSection />}

      </div>

      {/* 4. Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isEditing={!!editingProject}
      />

    </div>
  );
}