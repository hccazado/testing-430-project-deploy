import { fetchProducts, fetchReviews } from '../db/queries';

export default async function RatingsReviews() {
  const products = await fetchProducts();
  const reviews = await fetchReviews();
  return (
    <div className="md:grid grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-solid bg-gray-100 p-5 m-4 rounded-xl"
        >
          <p className="m-3 font-bold">{product.name}</p>
          {reviews.map((review) => (
            <div key={review.id}>
              <p>${review}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
