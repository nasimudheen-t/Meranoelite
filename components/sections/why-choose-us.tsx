// "use client";

// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Clock,
//   Award,
//   Cpu,
//   Leaf,
//   Zap,
// } from "lucide-react";

// const FEATURES = [
//   {
//     title: "Premium Quality",
//     description:
//       "Luxury lighting solutions crafted with precision, elegance, and exceptional durability.",
//     icon: Award,
//     className:
//       "md:col-span-2 md:row-span-2 bg-[#664930]",
//   },
//   {
//     title: "Long Lasting",
//     description:
//       "Advanced LED systems engineered for years of reliable performance.",
//     icon: Clock,
//     className: "bg-[#FFF8F2]",
//   },
//   {
//     title: "Expert Installation",
//     description:
//       "Professional smart lighting setup tailored for modern interiors.",
//     icon: ShieldCheck,
//     className: "bg-[#FFF8F2]",
//   },
//   {
//     title: "Smart Technology",
//     description:
//       "Intelligent automation with seamless app and voice control integration.",
//     icon: Cpu,
//     className: "bg-[#FFF8F2]",
//   },
//   {
//     title: "Eco Friendly",
//     description:
//       "Energy-saving systems supporting sustainable and green living.",
//     icon: Leaf,
//     className: "bg-[#FFF8F2]",
//   },
//   {
//     title: "Energy Efficient",
//     description:
//       "Reduce energy consumption while maintaining premium lighting quality.",
//     icon: Zap,
//     className:
//       "md:col-span-2 bg-[#997E67]",
//   },
// ];

// export function WhyChooseUs() {
//   return (
//     <section className="relative overflow-hidden bg-[#F6F1EB] py-24 md:py-32">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFDBBB]/20 blur-[140px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

//         {/* TOP CONTENT */}
//         <div className="text-center max-w-3xl mx-auto mb-20">

//           {/* SMALL TEXT */}
//           <span className="uppercase tracking-[0.3em] text-sm text-[#997E67] font-semibold block mb-5">
//             Why Choose Us
//           </span>

//           {/* TITLE */}
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#664930] mb-6">
//             Crafted For <br />

//             <span className="text-[#997E67]">
//               Modern Luxury Living
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-[#7A6757] text-lg leading-relaxed">
//             Smart LED lighting solutions designed to combine
//             elegance, innovation, energy efficiency, and
//             intelligent automation.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-4 md:grid-rows-3 gap-5 auto-rows-[220px]">

//           {FEATURES.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className={`group relative overflow-hidden rounded-[32px] border border-[#CCBEB1]/15 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(102,73,48,0.12)] ${feature.className}`}
//               >
//                 {/* HOVER LIGHT */}
//                 <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,219,187,0.18),transparent_60%)]" />

//                 {/* CONTENT */}
//                 <div className="relative z-10 flex h-full flex-col">

//                   {/* ICON */}
//                   <div
//                     className={`mb-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
//                       feature.className.includes("bg-[#FFF8F2]")
//                         ? "bg-[#FFDBBB]"
//                         : "bg-white/10"
//                     }`}
//                   >
//                     <Icon
//                       className={`h-8 w-8 ${
//                         feature.className.includes("bg-[#FFF8F2]")
//                           ? "text-[#664930]"
//                           : "text-[#FFF8F2]"
//                       }`}
//                     />
//                   </div>

//                   {/* TEXT */}
//                   <div className="mt-8">

//                     <h3
//                       className={`text-2xl font-black mb-3 ${
//                         feature.className.includes("bg-[#FFF8F2]")
//                           ? "text-[#664930]"
//                           : "text-[#FFF8F2]"
//                       }`}
//                     >
//                       {feature.title}
//                     </h3>

//                     <p
//                       className={`leading-relaxed text-sm ${
//                         feature.className.includes("bg-[#FFF8F2]")
//                           ? "text-[#7A6757]"
//                           : "text-[#E7D8CA]"
//                       }`}
//                     >
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }