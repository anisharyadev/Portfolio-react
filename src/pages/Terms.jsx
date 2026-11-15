import { 
  FaHandshake, 
  FaLaptopCode, 
  FaCreditCard, 
  FaSyncAlt, 
  FaCopyright, 
  FaShieldAlt, 
  FaBalanceScale 
} from "react-icons/fa";

const sections = [
  {
    id: 1,
    title: "Agreement to Terms",
    icon: <FaHandshake />,
    content: "By hiring Anish Aryadev Biswal ('I', 'me', 'my') or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with my services."
  },
  {
    id: 2,
    title: "Services Provided",
    icon: <FaLaptopCode />,
    content: "I provide web design and development services, including but not limited to: Custom website design (React, HTML, CSS, JS), E-commerce websites with WhatsApp integration, and SEO optimization. The specific scope of work, timeline, and price will be outlined in a separate project proposal."
  },
  {
    id: 3,
    title: "Payment Terms",
    icon: <FaCreditCard />,
    content: "A 50% advance payment is required before work begins. The remaining 50% is due upon project completion and before the final files or hosting access are handed over. All payments are non-refundable once the design/development phase has begun."
  },
  {
    id: 4,
    title: "Revisions & Changes",
    icon: <FaSyncAlt />,
    content: "Each project includes up to 2 rounds of revisions during the design phase. Any additional changes requested after the design is approved or after the site has gone live will be billed at an hourly rate or as a separate project."
  },
  {
    id: 5,
    title: "Ownership & Copyright",
    icon: <FaCopyright />,
    content: "Upon full payment, you will own the final website files and content. However, I retain the right to display the completed project in my portfolio and on social media for promotional purposes, unless an NDA is signed prior to the project."
  },
  {
    id: 6,
    title: "Limitation of Liability",
    icon: <FaShieldAlt />,
    content: "I am not liable for any direct, indirect, or incidental damages arising from the use of the website or services provided. This includes, but is not limited to, loss of data, loss of revenue, or downtime caused by third-party hosting providers."
  },
  {
    id: 7,
    title: "Governing Law",
    icon: <FaBalanceScale />,
    content: "These terms shall be governed and construed in accordance with the laws of India. Any disputes arising from this agreement will be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha."
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16 md:pt-24 pb-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Conditions</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before using my services. <br className="hidden md:block" /> 
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            // Make the first and last cards span full width for a bento effect
            const isFullWidth = index === 0 || index === 6;

            return (
              <div 
                key={section.id}
                className={`group relative bg-[#0e0e12]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] overflow-hidden ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                {/* Animated Top Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Huge Faint Number in Background */}
                <div className="absolute -top-4 -right-2 text-8xl md:text-9xl font-black text-white/[0.02] group-hover:text-blue-500/5 transition-colors duration-500 select-none pointer-events-none font-sans">
                  0{section.id}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-white/5 flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </h2>
                  </div>

                  {/* Content */}
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
          {/* Glow behind banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-[#0e0e12]/90 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2rem] text-center overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             
             <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">Have questions about these terms?</h3>
             <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto">If anything is unclear, feel free to reach out before starting a project. I'm always happy to explain my process.</p>
             
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