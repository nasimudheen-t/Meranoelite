import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Clients } from "@/components/sections/clients";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { ProductsPreview } from "@/components/sections/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <About/>
      {/* <Stats /> */}
      <ProductsPreview/>
      <Clients />
      <Testimonials />
      <Footer />
    </main>
  );
}