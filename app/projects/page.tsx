"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Lighting",
    category: "Residential",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 2,
    title: "Modern Living Room",
    category: "Interior Design",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    id: 3,
    title: "Premium Hotel Lobby",
    category: "Hospitality",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 4,
    title: "Smart Office Lighting",
    category: "Commercial",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
  {
    id: 5,
    title: "Restaurant Ambience",
    category: "Hospitality",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
  {
    id: 6,
    title: "Luxury Bedroom Concept",
    category: "Residential",
    location: "Milan, Italy",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* HERO */}
     <Navbar />
      <section className="relative pt-40 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D9B38C15,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="uppercase tracking-[6px] text-[#D9B38C] text-sm mb-5">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Lighting Projects
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Discover how Meranoelite transforms residential,
            commercial, and hospitality spaces through innovative
            lighting solutions that combine elegance,
            functionality, and smart technology.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["250+", "Projects Completed"],
            ["15+", "Years Experience"],
            ["30+", "Cities Covered"],
            ["98%", "Client Satisfaction"],
          ].map(([number, text]) => (
            <div
              key={text}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >
              <h2 className="text-4xl font-bold text-[#D9B38C] mb-2">
                {number}
              </h2>

              <p className="text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={`${project.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-1 rounded-full border border-[#D9B38C]/30 text-[#D9B38C] text-xs mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm">
                    {project.location}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <button className="w-full rounded-full border border-[#D9B38C]/30 py-3 text-[#D9B38C] hover:bg-[#D9B38C] hover:text-black transition">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[600px] rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Featured Project"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-[#D9B38C] mb-4">
              Featured Project
            </p>

            <h2 className="text-5xl font-serif mb-8">
              Luxury Smart Villa
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              A complete lighting transformation featuring
              architectural lighting, smart automation systems,
              ambient mood lighting, and custom decorative
              fixtures designed to enhance every space.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="text-[#D9B38C] text-3xl font-bold">
                  12,000
                </h3>
                <p className="text-zinc-400">Sq. Ft Area</p>
              </div>

              <div>
                <h3 className="text-[#D9B38C] text-3xl font-bold">
                  8 Months
                </h3>
                <p className="text-zinc-400">Completion Time</p>
              </div>

              <div>
                <h3 className="text-[#D9B38C] text-3xl font-bold">
                  250+
                </h3>
                <p className="text-zinc-400">Fixtures Installed</p>
              </div>

              <div>
                <h3 className="text-[#D9B38C] text-3xl font-bold">
                  Smart AI
                </h3>
                <p className="text-zinc-400">Automation System</p>
              </div>
            </div>

            <button className="px-8 py-4 rounded-full bg-[#D9B38C] text-black font-semibold hover:scale-105 transition">
              Explore Project
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}