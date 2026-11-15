import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="bg-[#111116] border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl relative">
      <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
      <p className="text-gray-400 text-sm mb-6">Fill in the form below and I'll get back to you within 24 hours.</p>

      {/* 
        FormSubmit Action:
        Replace "YOUR_EMAIL_HERE" with your actual Gmail (e.g., anisharyadevb@gmail.com)
      */}
      <form 
        action="https://formsubmit.co/25bd9b0a068a79852a6b9a677a488f65" 
        method="POST" 
        className="space-y-4"   
      >
        {/* --- FormSubmit Configuration (Hidden Fields) --- */}
        
        {/* Disable Captcha for smoother UX (Optional, but recommended for portfolios) */}
        <input type="hidden" name="_captcha" value="false" />
        
        {/* Set a clean subject line for your Gmail inbox */}
        <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
        
        {/* Set the Reply-To field to the submitter's email so you can reply directly */}
        <input type="hidden" name="_replyto" value="email" />

        {/* Optional: Redirect to a custom Thank You page after submission */}
        <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

        {/* --- Visible Input Fields --- */}
        
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="name" 
            required
            className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Aryadev"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            name="email" 
            required
            className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Aryadev@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="+91 7978800300"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">I'm interested in</label>
          <select 
            name="service" 
            className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
          >
            <option value="">Select a service...</option>
            <option value="web-design">Web Design</option>
            <option value="business-website">Business Website</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">Your Message <span className="text-red-500">*</span></label>
          <textarea 
            name="message" 
            rows="4"
            required
            className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            placeholder="Tell me about your project, goals, and requirements..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 mt-2"
        >
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </div>
  );
}