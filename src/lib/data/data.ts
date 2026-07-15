import { ProductInput } from "@/interfaces/interfaces";


export const getProduct = async (): Promise<ProductInput[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductInput[] = await res.json();

  return data;
};