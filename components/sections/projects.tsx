// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { PROJECTS } from "@/lib/data";
// import { ArrowUpRight, MapPin } from "lucide-react";

// export function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-[#1F1A17] py-24 md:py-32"
//     >
//       {/* BACKGROUND GLOW */}
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#997E67]/20 blur-[140px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

//         {/* TOP SECTION */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">

//           <div className="max-w-3xl">

//             {/* SMALL TEXT */}
//             <span className="uppercase tracking-[0.3em] text-sm text-[#CCBEB1] font-semibold block mb-5">
//               Interior Projects
//             </span>

//             {/* TITLE */}
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#FFF8F2]">
//               Modern Spaces <br />

//               <span className="text-[#997E67]">
//                 Designed With Light
//               </span>
//             </h2>
//           </div>

//           {/* BUTTON */}
//           <button className="hidden md:flex items-center justify-center rounded-full bg-[#997E67] px-7 py-4 text-[#FFF8F2] font-medium transition-all duration-300 hover:bg-[#CCBEB1] hover:text-[#1F1A17]">
//             View All Projects
//           </button>
//         </div>

//         {/* PROJECT GRID */}
//         <div className="grid md:grid-cols-2 gap-7 lg:gap-8">

//           {PROJECTS.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               className="group relative overflow-hidden rounded-[30px] aspect-[4/3] cursor-pointer"
//             >
//               {/* IMAGE */}
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17] via-[#1F1A17]/30 to-transparent" />

//               {/* HOVER DARK */}
//               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-all duration-500" />

//               {/* CONTENT */}
//               <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">

//                 {/* TAGS */}
//                 <div className="flex items-center gap-3 mb-5">

//                   <span className="rounded-full bg-[#997E67]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#FFF8F2] backdrop-blur-xl">
//                     {project.category}
//                   </span>

//                   <span className="rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs font-semibold text-[#E7D8CA] backdrop-blur-xl">
//                     {project.year}
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-3xl md:text-4xl font-black leading-tight text-[#FFF8F2] transition-colors duration-300 group-hover:text-[#CCBEB1]">
//                   {project.title}
//                 </h3>

//                 {/* HOVER AREA */}
//                 <div className="mt-6 flex items-center justify-between translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

//                   {/* LOCATION */}
//                   <div className="flex items-center text-[#E7D8CA] text-sm font-medium">
//                     <MapPin className="mr-2 h-4 w-4 text-[#CCBEB1]" />

//                     {project.location}
//                   </div>

//                   {/* ICON */}
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8F2] text-[#1F1A17] shadow-lg">
//                     <ArrowUpRight className="h-5 w-5" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* MOBILE BUTTON */}
//         <div className="mt-10 md:hidden">
//           <button className="w-full rounded-full bg-[#997E67] py-4 text-[#FFF8F2] font-medium transition-all duration-300 hover:bg-[#CCBEB1] hover:text-[#1F1A17]">
//             View All Projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }