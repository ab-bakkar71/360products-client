import { Product, ProductInput } from "@/interfaces/interfaces";


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

// get single product

export const getSingleProduct = async (
  id: string
): Promise<Product> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return await res.json();
};