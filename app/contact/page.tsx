import { Contact } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Contact Us | Lumira Studio",
  description: "Get in touch with us for premium lighting solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
