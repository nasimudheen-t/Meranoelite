export interface Product {
  id: number;
  product_name: string;
  product_description: string | null;
  product_image: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}