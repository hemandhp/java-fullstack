export default function Filters({ categories, filters, setFilters }) {
  return (
    <aside className="w-full md:w-1/4 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">Categories</h3>
        {["all", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setFilters({ ...filters, category: c })}
            className={`block w-full text-left py-1 capitalize ${
              filters.category === c
                ? "text-primary-accent font-bold"
                : "text-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Max Price</h3>
        <input
          type="range"
          min="1"
          max="500"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: e.target.value })
          }
          className="w-full"
        />
        <p className="text-sm">Up to: ${filters.maxPrice}</p>
      </div>
    </aside>
  );
}
