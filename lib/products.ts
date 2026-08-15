import { ENDPOINTS } from "./api";

export async function getProducts() {
  const response = await fetch(ENDPOINTS.products, {
    cache: "no-store",
  });

  const data = await response.json();

  return data.data;
}

export async function getProduct(id: string | number) {
  const response = await fetch(`${ENDPOINTS.products}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.data;
}

