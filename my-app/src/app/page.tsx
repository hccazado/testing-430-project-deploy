import { fetchProducts } from './db/mongoQueries';
import { playwrite_vn } from './fonts';
import CatalogCards from './ui/catalog-cards';

export default async function Home() {
  const products = await fetchProducts();
  const productsJson = JSON.parse(JSON.stringify(products));

  return (
    <main className="h-screen p-1 items-center">
      <h1 className={`text-3xl text-center mt-5 ${playwrite_vn.className}`}>
        Catalog
      </h1>
      <CatalogCards products={productsJson} />
    </main>
  );
}
