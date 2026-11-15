export default function Stats() {
  return (
    <div className="max-w-[1100px] mx-auto w-full grid grid-cols-3 gap-4 md:gap-8 mt-16 border-t border-b border-white/5 py-10 px-6">
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold text-white mb-2">8</span>
        <span className="text-gray-400 text-xs md:text-sm">Projects Built</span>
      </div>
      
      <div className="flex flex-col items-center justify-center border-l border-white/5">
        <span className="text-3xl md:text-4xl font-bold text-white mb-2">3</span>
        <span className="text-gray-400 text-xs md:text-sm">Years Experience</span>
      </div>
      
      <div className="flex flex-col items-center justify-center border-l border-white/5">
        <span className="text-3xl md:text-4xl font-bold text-white mb-2">
          100<span className="text-2xl md:text-3xl">%</span>
        </span>
        <span className="text-gray-400 text-xs md:text-sm">Client Satisfaction</span>
      </div>
    </div>
  );
}