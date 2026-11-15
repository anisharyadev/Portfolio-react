import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Giant 404 Text */}
        <div className="relative mb-4">
          <h1 className="text-[150px] md:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[220px] font-black text-blue-500/20 blur-[40px] leading-none tracking-tighter select-none pointer-events-none">
            404
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
          >
            <FaHome />
            Back to Home
          </Link>
          <Link 
            to="/portfolio" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#111116] border border-white/10 hover:bg-[#1a1a24] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaSearch />
            Explore Portfolio
          </Link>
        </div>

        {/* Small Back Link */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
        >
          <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
          Go back to previous page
        </button>

      </div>
    </div>
  );
}