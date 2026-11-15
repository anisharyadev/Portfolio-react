import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1100px] mx-auto px-6 h-[72px] flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-extrabold text-2xl text-white tracking-tight">
          Aryadev<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className={`text-sm font-medium transition-colors ${isActive("/portfolio") ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-7 h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full bg-[#0a0a0f] border-b border-white/10 flex flex-col items-center py-6 gap-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'} shadow-xl`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-400">About</Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-400">Portfolio</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-400">Contact</Link>
      </div>
    </header>
  );
}