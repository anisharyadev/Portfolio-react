import { FaTimes, FaImage, FaLink, FaTags, FaCheckCircle } from "react-icons/fa";

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  formData, 
  setFormData, 
  handleSubmit, 
  isEditing 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="bg-[#0e0e12] border border-white/10 rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col">
        
        {/* Animated Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 z-20" />

        {/* Header (Fixed) */}
        <div className="bg-[#0e0e12] px-8 py-6 border-b border-white/5 flex justify-between items-center z-10 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h2>
            <p className="text-gray-400 text-sm mt-1">Fill in the details below to update your portfolio.</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a24] text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 border border-white/5 transition-all"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto custom-scrollbar flex-grow p-8 pr-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Project Title</label>
              <input 
                type="text" 
                value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                placeholder="e.g. Solo Trip India"
                required 
              />
            </div>
            
            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</label>
              <textarea 
                value={formData.desc} 
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })} 
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" 
                rows="3" 
                placeholder="Describe what the project does..."
                required 
              />
            </div>
            
            {/* Split Row: Category & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                <select 
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                  className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="Live">Live</option>
                  <option value="In Development">In Development</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Status</label>
                <select 
                  value={formData.status} 
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })} 
                  className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="Live">Live</option>
                  <option value="In Development">In Development</option>
                </select>
              </div>
            </div>
            
            {/* Tech Tags */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FaTags /> Tech Stack Tags
              </label>
              <input 
                type="text" 
                value={formData.tags} 
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })} 
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all" 
                placeholder="React, Node.js, Firebase (comma separated)" 
              />
            </div>
            
            {/* Image URL with Inline Preview */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FaImage /> Image URL
              </label>
              <div className="flex gap-4 items-center">
                <input 
                  type="url" 
                  value={formData.image} 
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
                  className="flex-1 bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all" 
                  placeholder="https://images.unsplash.com/..." 
                  required 
                />
                <div className="w-14 h-14 rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0f] flex items-center justify-center flex-shrink-0">
                  {formData.image ? (
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                  ) : (
                    <FaImage className="text-gray-600" />
                  )}
                </div>
              </div>
            </div>

            {/* Project URL */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FaLink /> Live Project URL
              </label>
              <input 
                type="url" 
                value={formData.url} 
                onChange={(e) => setFormData({ ...formData, url: e.target.value })} 
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all" 
                placeholder="https://your-live-project.com" 
              />
            </div>
            
            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3 border-t border-white/5 mt-8">
              <button 
                type="button"
                onClick={onClose}
                className="w-full sm:w-1/3 bg-[#1a1a24] hover:bg-[#222230] border border-white/5 py-3.5 rounded-xl font-semibold transition-colors text-sm"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="w-full sm:w-2/3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-semibold transition-colors text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <FaCheckCircle />
                {isEditing ? "Save Changes" : "Publish Project"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}