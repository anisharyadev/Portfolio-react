import { FaQuoteRight, FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    name: "Pihu Agarwal",
    role: "Chocolate Shop Owner, Bhopal",
    text: "I'm really happy with the chocolate shop website Aryadev has created! The design is clean, modern, and user-friendly. You understood my ideas well and delivered exactly what I wanted. Excited to collaborate with you again on future projects.",
    image: "Pihu-Agarwal.png",
    stars: 5,
  },
  {
    name: "Pallak Behera",
    role: "Creative Agency, Chennai",
    text: "Working with Anish Aryadev Biswal was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional website that has significantly improved our online presence.",
    image: "Pallak-Behera.png",
    stars: 5,
  },
  {
    name: "Ajay Mallik",
    role: "Coffee Shop Owner, Bhubaneswar",
    text: "Working with Anish Aryadev Biswal was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional website that has significantly improved our online presence.",
    image: "Ajay-Mallik.png",
    stars: 4,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Don't just take my word for it. Here is what people I've worked with have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative bg-[#111116] border border-white/5 p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)]"
            >
              
              {/* Subtle Top Gradient Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

              <div>
                {/* Top Row: Avatar, Name, Role */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-lg bg-[#1a1a24]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += `<div class="w-14 h-14 rounded-full bg-[#1a1a24] border border-white/10 flex items-center justify-center text-blue-400 font-bold text-xl shadow-lg">${review.name.charAt(0)}</div>`;
                      }}
                    />
                    {/* Verified Checkmark */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-[3px] border-[#111116]">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">{review.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5 font-medium">{review.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1.5 text-yellow-500 text-sm mb-6">
                  {[...Array(5)].map((_, i) => (
                    i < review.stars ? <FaStar key={i} /> : <FaRegStar key={i} className="text-gray-700" />
                  ))}
                </div>
                
                {/* Review Text with Quote */}
                <div className="relative">
                  <FaQuoteRight className="absolute -top-2 -right-1 text-4xl text-white/[0.03] group-hover:text-blue-500/10 transition-colors duration-500" />
                  <p className="text-gray-300 text-sm leading-[1.9] relative z-10">
                    "{review.text}"
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}