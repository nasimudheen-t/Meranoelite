import { About } from "@/components/sections/about";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "About Us | Lumira Studio",
  description: "Learn more about our premium LED lighting experiences.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
