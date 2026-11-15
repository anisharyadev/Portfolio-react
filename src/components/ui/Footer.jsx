import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronDown
} from "react-icons/fa";

// Accordion Component for Mobile View
function MobileAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 md:border-none py-4 md:py-0">
      {/* Header - Clickable only on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:cursor-default text-left"
      >
        <h3 className="text-white font-semibold text-lg md:text-sm md:uppercase md:tracking-wider">
          {title}
        </h3>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Content - Hidden on mobile unless open, ALWAYS visible on desktop */}
      <div className={`transition-all duration-300 overflow-hidden md:block md:mt-5 md:!max-h-full md:!opacity-100 ${isOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 pt-16 pb-24 md:pb-8 relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Footer Grid: 1 Column on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 mb-8 md:mb-16">

          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pb-8 md:pb-0 border-b border-white/5 md:border-none">
            <Link to="/" className="font-extrabold text-2xl text-white tracking-tight mb-4 inline-block">
              Aryadev<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-[1.8] mb-6 max-w-[280px] md:max-w-none">
              Engineer by Degree | Designer by Passion.<br />
              Building websites for business growth.
            </p>
            {/* Social Icons */}
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
                  className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <MobileAccordion title="Quick Links">
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">Contact</Link></li>
            </ul>
          </MobileAccordion>

          {/* Support */}
          <MobileAccordion title="Support">
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li><Link to="/terms" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 text-sm hover:text-blue-500 transition-colors inline-block">Refund Policy</Link></li>
            </ul>
          </MobileAccordion>

          {/* Contact Info */}
          <MobileAccordion title="Get In Touch">
            <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
              <li className="flex items-center md:items-start gap-3 group">
                <FaEnvelope className="text-blue-500 flex-shrink-0 transition-transform group-hover:scale-110 mt-1" size={14} />
                <a href="mailto:anisharyadevb@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors break-all text-center md:text-left">
                  anisharyadevb@gmail.com
                </a>
              </li>
              <li className="flex items-center md:items-start gap-3 group">
                <FaPhoneAlt className="text-blue-500 flex-shrink-0 transition-transform group-hover:scale-110 mt-1" size={14} />
                <a href="tel:+917978800300" className="text-gray-400 text-sm hover:text-white transition-colors text-center md:text-left">
                  +91 79788 00300
                </a>
              </li>
              <li className="flex items-center md:items-start gap-3 group">
                <FaMapMarkerAlt className="text-blue-500 flex-shrink-0 transition-transform group-hover:scale-110 mt-1" size={14} />
                <span className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                  Bhubaneswar, Odisha, India
                </span>
              </li>
            </ul>
          </MobileAccordion>

        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Anish Aryadev Biswal. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms</Link>
            <Link to="/refund-policy" className="text-gray-500 text-sm hover:text-white transition-colors">Refund</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}