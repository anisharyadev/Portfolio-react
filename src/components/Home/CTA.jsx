import { FaPaperPlane, FaTags } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* CTA Container */}
        <div className="bg-[#111116] border border-white/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Let's create a stunning digital presence for your business. Get a free consultation today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:anisharyadevb@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#2563eb] hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              <FaPaperPlane />
              Start Your Project
            </a>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-colors"
            >
              <FaTags />
              View Pricing Plans
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}