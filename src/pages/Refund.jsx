import { 
  FaUndoAlt, 
  FaCreditCard, 
  FaBan, 
  FaCheckCircle, 
  FaClock, 
  FaFileContract 
} from "react-icons/fa";

const sections = [
  {
    id: 1,
    title: "Advance Payments",
    icon: <FaCreditCard />,
    content: "A 50% advance payment is required to secure your project slot and begin the design/development phase. This payment covers initial research, planning, and design time."
  },
  {
    id: 2,
    title: "Refund Eligibility",
    icon: <FaCheckCircle />,
    content: "You are eligible for a full refund of your advance payment ONLY if you cancel the project within 48 hours of making the payment and BEFORE the design phase has officially begun."
  },
  {
    id: 3,
    title: "Non-Refundable Circumstances",
    icon: <FaBan />,
    content: "Once the initial design concepts have been shared or the development phase has started, the advance payment becomes strictly non-refundable. This is because significant time and resources have already been invested in your project."
  },
  {
    id: 4,
    title: "Project Cancellation by Me",
    icon: <FaUndoAlt />,
    content: "If I am unable to complete your project due to unforeseen circumstances on my end, you will receive a full refund of any payments made, including the advance. You will also retain ownership of any work completed up to that point."
  },
  {
    id: 5,
    title: "Refund Processing Time",
    icon: <FaClock />,
    content: "Approved refunds will be processed within 5-7 business days. The funds will be returned to the original payment method used (UPI, Bank Transfer, etc.)."
  },
  {
    id: 6,
    title: "Third-Party Costs",
    icon: <FaFileContract />,
    content: "Any third-party costs incurred (such as domain name purchases, hosting subscriptions, or premium plugin licenses) are non-refundable and must be paid by the client."
  }
];

export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16 md:pt-24 pb-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Please read my refund policy carefully before starting a project. <br className="hidden md:block" /> 
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            // Make the 1st and 3rd cards span full width to keep a nice visual balance
            const isFullWidth = index === 0 || index === 3;

            return (
              <div 
                key={section.id}
                className={`group relative bg-[#0e0e12]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] overflow-hidden ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Giant Faint Background Number */}
                <div className="absolute -top-4 -right-2 text-8xl md:text-9xl font-black text-white/[0.02] group-hover:text-blue-500/5 transition-colors duration-500 select-none pointer-events-none font-sans">
                  0{section.id}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-white/5 flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-[1.9] flex-grow">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Banner */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-[#0e0e12]/90 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2rem] text-center overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             
             <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">Need clarification?</h3>
             <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto">If you have any questions about my refund policy or project terms, feel free to reach out before making a payment.</p>
             
             <a 
               href="mailto:anisharyadevb@gmail.com" 
               className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300 relative z-10"
             >
               Contact Me
             </a>
          </div>
        </div>

      </div>
    </div>
  );
}