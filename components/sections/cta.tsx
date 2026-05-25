// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, PhoneCall } from "lucide-react";

// export function CTA() {
//   return (
//     <section className="relative py-24 md:py-32 overflow-hidden bg-[#664930]">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-1/2 left-1/2 w-[700px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-[#FFDBBB]/20 blur-[140px] rounded-full pointer-events-none" />

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative overflow-hidden rounded-[40px] border border-[#FFDBBB]/10 bg-[#997E67]/30 backdrop-blur-2xl p-10 md:p-20 text-center shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
//         >
          
//           {/* TOP LINE */}
//           <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFDBBB] to-transparent opacity-40" />

//           {/* SMALL TEXT */}
//           <span className="uppercase tracking-[0.3em] text-sm text-[#FFDBBB] font-semibold block mb-6">
//             Smart Luxury Lighting
//           </span>

//           {/* HEADING */}
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-[#FFF8F2] mb-8">
//             Illuminate Your <br />

//             <span className="bg-gradient-to-r from-[#FFDBBB] via-[#CCBEB1] to-[#997E67] bg-clip-text text-transparent">
//               Modern Spaces
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-[#E7D8CA] mb-12">
//             Discover premium smart LED lighting solutions crafted
//             for luxury interiors, architectural elegance, and
//             intelligent living experiences.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-5">

//             {/* PRIMARY BUTTON */}
//             <button className="group flex items-center justify-center gap-3 rounded-full bg-[#FFDBBB] px-8 py-4 text-[#664930] font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#FFE8D4] shadow-[0_10px_30px_rgba(255,219,187,0.25)]">
//               Explore Collection

//               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>

//             {/* SECONDARY BUTTON */}
//             <button className="group flex items-center justify-center gap-3 rounded-full border border-[#FFDBBB]/20 bg-white/5 px-8 py-4 text-[#FFF8F2] backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
//               <PhoneCall className="w-5 h-5 text-[#FFDBBB]" />

//               Contact Our Team
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }