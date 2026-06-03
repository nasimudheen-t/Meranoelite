import { ENDPOINTS } from "./api";

export async function getProducts() {
  const response = await fetch(ENDPOINTS.products, {
    cache: "no-store",
  });

  const data = await response.json();

  return data.data;
}
