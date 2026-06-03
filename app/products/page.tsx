import { ProductsClient } from "@/components/products";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Products |Meranoelite",
  description: "Explore our premium collection of LED lighting.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <ProductsClient />
      <Footer />
    </main>
  );
}
