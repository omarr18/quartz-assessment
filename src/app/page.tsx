import Image from "next/image";

import { fetchProducts } from "@src/services/products.services";
import Products from "@src/views/Home/components/Products";

export default async function Home() {
  const products = (await fetchProducts()) || [];
  return (
    <main className=" min-h-screen  p-8 md:px-12  lg:px-16">
      <Image
        alt="quartzdev logo"
        className="mb-10"
        width={200}
        height={70}
        src="/quartz-logo.png"
      />
      <Products products={products} />
    </main>
  );
}
