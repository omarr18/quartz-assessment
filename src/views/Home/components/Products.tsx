import Image from "next/image";

import { Product } from "@src/models/Home/ProductsResponse.model";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Products({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 mt-4   md:grid-cols-2 xl:grid-cols-4 gap-6 ">
      {products.map((product: Product) => (
        <Card
          key={product.id}
          className="max-w-[350px] pb-12 relative mx-auto md:mx-[unset] shadow rounded-md bg-gray-800 flex flex-col"
          renderImage={() => (
            <Image
              className=" rounded-t-md"
              width={350}
              height={350}
              src={product.images[0]}
              alt="image 1"
            />
          )}
        >
          {/* Card Body */}
          <div className="p-3 ">
            <h5 className="text-2xl font-bold tracking-tight mb-2 text-white">
              {product.title}
            </h5>
            <p className="font-normal mb-2 text-gray-400">
              {product.description.split(".")[0]}
            </p>
          </div>
          {/* Card Footer */}
          <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
            <p className="text-xl">{product.price} $</p>
            <Link
              className="py-2 text-sm px-4 rounded-lg bg-blue-700"
              href={`/${product.id}`}
            >
              Read More
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
