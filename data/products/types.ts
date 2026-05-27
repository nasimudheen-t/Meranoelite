export interface Product {
  id: string | number;
  title: string;
  category: string;
  price: string;
  image: string;
  short?: string;
  description: string;
  features?: string[];
}
