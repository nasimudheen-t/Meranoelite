import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
// import { Projects } from "@/components/sections/projects";
// import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Clients } from "@/components/sections/clients";
import { Testimonials } from "@/components/sections/testimonials";
// import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <About />
      <Products />
      {/* <Projects /> */}
      {/* <WhyChooseUs /> */}
      <Clients />
      <Testimonials />
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </main>
  );
}