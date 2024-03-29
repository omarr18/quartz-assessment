import { Product } from "@src/models/Home/ProductsResponse.model";

export const fetchProducts = async (): Promise<Product[] | undefined> => {
  // fetch first 10 product
  try {
    const res = await fetch(
      `${process.env.FAKE_API_BASE_URL}/products?offset=0&limit=10`,
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductById = async (
  id: string,
): Promise<Product | undefined> => {
  // fetch product by Id
  try {
    const res = await fetch(`${process.env.FAKE_API_BASE_URL}/products/${id}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
