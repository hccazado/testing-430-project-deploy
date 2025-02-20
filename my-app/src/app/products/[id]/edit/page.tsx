import { fetchProducts } from '@/app/db/mongoQueries';
import ProductForm from '@/app/components/ProductForm';
import { auth } from '../../../../../auth';
import { redirect } from 'next/navigation';
import { Product as ProductType } from '@/app/db/types/index'; //importing types

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get the session using getServerSession
  const session = await auth();

  // Check if the session is null or undefined
  if (!session) {
    // Redirect to the home page if not logged in
    redirect('/');
  }

  // Additional type check for creator
  if (session.user.type !== 'creator') {
    // Redirect to the home page if the user is not a creator
    redirect('/');
  }

  // Extract the product ID from the params
  const { id } = await params;
  // Fetch the product by user ID
  const userId = session.user.id;
  if (!userId) {
    return <div>User ID is not available</div>;
  }
  const products = await fetchProducts();
  const productsJson = JSON.parse(JSON.stringify(products));
  const product = productsJson.find((p: ProductType) => p._id === id);

  // Check if the product exists and if the user has permission to edit it
  if (!product) {
    return (
      <div>Product not found or you don&#39;t have permission to edit it</div>
    );
  }

  // Render the edit product page
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold mb-8">Edit Product</h1>
      <ProductForm mode="edit" product={product} />
    </main>
  );
}
