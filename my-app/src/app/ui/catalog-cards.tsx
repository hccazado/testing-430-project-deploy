import Image from "next/image";
import { fetchProducts } from "../db/queries"

export default async function CatalogCards() {
    const products = await fetchProducts();

    return (
        <div className="md:grid grid-cols-3">
            {products.map(product => (
                <div key={product.id} className="border border-solid bg-gray-100 p-5 m-4 rounded-xl">
                    <p className="m-3 font-bold">{product.name}</p>
                    <p className="m-3">${product.price}</p>
                    <Image 
                        src={product.image}
                        alt={`${product.name} image`}
                        width={200}
                        height={200}
                        className="m-auto border border-solid border-gray-300"
                    />
                    <a href="#" className="block p-3 m-5 bg-blue-300 w-xs rounded-xl text-center">Product Details</a>
                </div>
            ))}
        </div>
    )
}