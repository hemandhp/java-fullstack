import { useState, useMemo } from "react";
import { products } from "./data/products";
import ProductGrid from "./components/ProductGrid";
import Filters from "./components/Filters";
import CartSidebar from "./components/CartSidebar";


export default function App() {
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 500,
  });

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      filters.category === "all" || p.category === filters.category;
    const priceMatch = p.price <= filters.maxPrice;
    return categoryMatch && priceMatch;
  });

  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex gap-10">
        <Filters
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
          <ProductGrid products={filteredProducts} addToCart={addToCart} />
        </div>
      </div>

      <CartSidebar
        cart={cart}
        setCart={setCart}
        open={cartOpen}
        close={() => setCartOpen(false)}
      />
    </div>
  );
}
