import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaFacebookF,
  FaWhatsapp
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
        I'd love to hear from you! Whether you have a project in mind, a question about my services, or just want to say hello — feel free to reach out.
      </p>

      {/* Info Cards */}
      <div className="space-y-4 mb-10">
        <a href="mailto:anisharyadevb@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#111116] border border-white/5 hover:border-blue-500/30 hover:bg-[#16161d] transition-all group">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg group-hover:scale-110 transition-transform">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-0.5">Email</p>
            <p className="text-white font-medium text-sm">anisharyadevb@gmail.com</p>
          </div>
        </a>

        <a href="tel:+917978800300" className="flex items-center gap-4 p-4 rounded-xl bg-[#111116] border border-white/5 hover:border-blue-500/30 hover:bg-[#16161d] transition-all group">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg group-hover:scale-110 transition-transform">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-0.5">Phone</p>
            <p className="text-white font-medium text-sm">+91 79788 00300</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111116] border border-white/5 transition-all group">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg group-hover:scale-110 transition-transform">
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-0.5">Location</p>
            <p className="text-white font-medium text-sm">Bhubaneswar, Odisha, India</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-400 mb-4">Connect with me</p>
        <div className="flex gap-3">
          {[
            { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/anish-aryadev-biswal/" },
            { icon: <FaGithub />, url: "https://github.com/anisharyadev" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/anisharyadevbiswal/" },
            { icon: <FaFacebookF />, url: "https://www.facebook.com/AnishAryadevBiswal1" }
          ].map((social, idx) => (
            <a 
              key={idx} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#111116] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917978800300" 
        target="_blank" 
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold transition-all duration-300 w-full sm:w-auto"
      >
        <FaWhatsapp className="text-xl" />
        Chat with me on WhatsApp
      </a>
    </div>
  );
}