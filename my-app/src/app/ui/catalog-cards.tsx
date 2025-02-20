'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../db/types';

export default function CatalogCards({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-400 p-2 m-4 rounded-xl"
      />
      <div className="md:grid grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border border-solid bg-gray-100 p-5 m-4 rounded-xl"
          >
            <p className="m-3 font-bold">{product.name}</p>
            <p className="m-3">${product.price}</p>
            <Image
              src={product.image || '/images/placeholder.jpg'}
              alt={`${product.name} image`}
              width={200}
              height={200}
              className="m-auto border border-solid border-gray-300"
              priority={true}
            />
            <a
              href=""
              className="block p-3 m-5 bg-ultraViolet text-white w-xs rounded-xl text-center"
            >
              Product Details
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
