import { useState } from "react";
import { FaPlus, FaMinus, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A standard business website usually takes 1-2 weeks. More complex e-commerce stores or custom SaaS platforms can take 3-4 weeks depending on the requirements."
  },
  {
    question: "Do you provide domain and hosting?",
    answer: "Yes, I can help you purchase your domain and set up hosting. However, the cost of the domain and hosting is paid directly by you to the provider (like GoDaddy or Hostinger)."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website I build is 100% responsive and optimized to look perfect on desktops, tablets, and mobile phones."
  },
  {
    question: "What if I need changes after the website is live?",
    answer: "I offer 30 days of free bug-fixing and minor updates after launch. For ongoing maintenance or major changes, we can discuss a monthly retainer."
  },
  {
    question: "How do I get started?",
    answer: "You can reach out to me via the contact page or drop an email. We'll discuss your requirements, and I'll provide a quote and timeline before we begin."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Sticky Header & Contact Prompt */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.2]">
                Frequently Asked <br /> Questions
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Everything you need to know about my services, process, and how we can work together.
              </p>

              {/* Mini Contact Card */}
              <div className="bg-[#111116] border border-white/5 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <FaCommentDots />
                  </div>
                  <h4 className="text-white font-bold">Still have questions?</h4>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Can't find the answer you're looking for? Feel free to reach out and I'll be happy to help.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm"
                >
                  <FaEnvelope />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-[#111116] border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-blue-500/40 bg-[#13131a]" : "border-white/5 hover:border-white/20"
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${
                      isOpen ? "text-blue-400" : "text-white group-hover:text-blue-400"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-blue-500 text-white rotate-180" : "bg-[#1a1a24] text-gray-400 group-hover:text-white"
                    }`}>
                      {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-[1.8]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}