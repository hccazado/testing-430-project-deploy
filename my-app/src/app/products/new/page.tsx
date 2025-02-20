import ProductForm from '@/app/components/ProductForm';

export default function NewProductPage() {
  return (
    
    <main className="p-24 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Add New Product</h1>
        <div className="bg-white p-8 rounded shadow-md">
          <ProductForm mode="create" />
        </div>
      </div>
    </main>
  );
}