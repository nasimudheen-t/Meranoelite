import ProductForm from "@/components/admin/ProductForm";
import ProductTable from "@/components/admin/ProductTable";

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <ProductForm />
      <ProductTable />
    </div>
  );
}