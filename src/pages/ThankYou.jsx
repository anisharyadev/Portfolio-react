import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft, FaPaperPlane } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#0a0a0f] px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10">
        
        {/* Main Card */}
        <div className="bg-[#111116] border border-white/5 p-10 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          
          {/* Animated Success Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            {/* Pulsing ring */}
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-75"></div>
            {/* Icon background */}
            <div className="relative w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Message Received!
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Thank you for reaching out. Your message was sent successfully. I'll review your inquiry and get back to you within 24 hours.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-blue-600 text-white font-medium transition-all duration-300"
            >
              <FaArrowLeft className="text-sm" />
              Back to Home
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a24] border border-white/10 hover:bg-[#222230] hover:border-white/20 text-white font-medium transition-all duration-300"
            >
              <FaPaperPlane className="text-sm" />
              View Portfolio
            </Link>
          </div>

        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest">
          Aryadev<span className="text-blue-500">.</span> — Engineer & Designer
        </p>

      </div>
    </div>
  );
}