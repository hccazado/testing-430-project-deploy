'use client';

export default function DeleteButton({ productId }: { productId: number }) {
  const handleDelete = async () => {
    if (confirm('Are you sure?')) {
      await fetch(`/api/products/${productId}`, { method: 'DELETE' });
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
  );
}