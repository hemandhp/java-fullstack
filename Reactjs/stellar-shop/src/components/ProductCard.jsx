export default function ProductCard({ product, addToCart }) {
  const ratingStars =
    "★".repeat(Math.round(product.rating)) +
    "☆".repeat(5 - Math.round(product.rating));

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-3 flex flex-col">
      <img
        src={product.img}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <div className="mt-3 flex flex-col justify-between h-full">
        <div>
          <p className="text-xs uppercase text-gray-500">{product.category}</p>
          <h3 className="text-lg font-bold mt-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>

        <div className="mt-3">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <span className="text-yellow-500">{ratingStars}</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-primary-accent text-white py-2 mt-3 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
