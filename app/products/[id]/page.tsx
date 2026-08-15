import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductDetail } from "@/components/products/product-detail";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Meranoelite",
      description: "The requested product could not be found.",
    };
  }

  const imageUrl = product.product_images?.[0] || "";

  return {
    title: product.product_name,
    description: product.product_description,
    openGraph: {
      title: product.product_name,
      description: product.product_description,
      images: imageUrl ? [imageUrl] : [],
      url: `https://www.meranoelite.com/products/${product.id}`,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] selection:bg-electric-blue/30 selection:text-white">
      <Navbar />
      <div className="flex-1 mt-20 md:mt-28">
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  );
}
