import Image from "next/image";

import { fetchProductById } from "@src/services/products.services";

export default async function page({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);
  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      {product?.id ? (
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src={product?.images[1]}
            alt="product image"
            width={500}
            height={500}
          />
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-lg lg:text-2xl">{product.title}</p>
            <p className="text-gray-400">{product.description}</p>
            <p className="text-gray-300">Category: {product.category.name}</p>
            <p className="text-gray-300 text-2xl">Price: {product.price}$</p>
          </div>
        </div>
      ) : (
        <div className=" w-screen flex items-center justify-center">
          <p className="text-6xl">Invalid Product ID</p>
        </div>
      )}
    </div>
  );
}
