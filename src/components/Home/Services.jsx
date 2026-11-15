import { FaLaptopCode, FaStore, FaRocket, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Design",
    desc: "Clean, modern, and responsive websites built with HTML, CSS, JavaScript, and React.",
    link: "#portfolio",
  },
  {
    icon: <FaStore />,
    title: "Business Websites",
    desc: "Professional websites for businesses including coffee shops, e-commerce with WhatsApp ordering.",
    link: "#portfolio",
  },
  {
    icon: <FaRocket />,
    title: "Digital Presence",
    desc: "Building your online identity with SEO-optimized, fast, and modern websites.",
    link: "#pricing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            From engineering to design — I bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-[#111116] border border-white/5 p-8 rounded-2xl hover:bg-[#16161d] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              {/* Icon with a subtle ring */}
              <div className="w-14 h-14 bg-[#0d1117] rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-blue-500/30">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Arrow moves right on hover */}
              <a 
                href={service.link} 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              >
                Learn More <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}