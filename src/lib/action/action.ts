import { ProductInput, ProductResponse } from "@/interfaces/interfaces";


// add Product
export const addProduct = async (
  addProductData: ProductInput,
): Promise<ProductResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addProductData),
  });
  if (!res.ok) {
    throw new Error("Failed to add product");
  }

  return (await res.json()) as ProductResponse;
};

// delete Product
export const deleteProduct = async (id: string): Promise<{ success: boolean; message: string }> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/delete/${id}`,
    {
      method: "DELETE",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }

  const result = await res.json();

  return result;
};
