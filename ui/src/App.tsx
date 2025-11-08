import useSWR from "swr";
import ProductCard from "./components/Product.tsx";
import type {Product, Variant} from "./types/product.ts";
import {useMemo, useState} from "react";
import { PRODUCTS_BASE_URL } from "./config.ts";

const fetcher = (url: string) => fetch(url).then(r => r.json())
const baseUrl = PRODUCTS_BASE_URL

function App() {
  const [filter, setFilter] = useState<string>("All");
  const [cartCount, setCartCount] = useState<number>(0);

  const { data, error: categoriesError } = useSWR<string[]>(
      `${baseUrl}/categories`,
      fetcher
  );

  const categories = useMemo(
      () => ["All", ...(data ?? [])],
      [data]
  );

  const productsUrl =
      filter === "All"
          ? baseUrl
          : `${baseUrl}?category=${encodeURIComponent(filter)}`;

  const { data: products, error: productsError } = useSWR<Product[]>(productsUrl, fetcher);

  const handleAddToCart = (_product: Product, _variant: Variant) => {
    setCartCount(c => c + 1);
  };

  if (productsError || categoriesError) return <div className="p-6 text-red-600">Failed to load</div>;
  return (
    <>
      <nav className="sticky top-0 w-full bg-white/15 backdrop-blur-2xl px-6 py-4 flex items-center">
        <div className="text-xl font-semibold">E-Commerce</div>
        <div className="flex-1 flex justify-center gap-4">
          {categories.map(category => (
              <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors hover:cursor-pointer ${
                      filter === category
                          ? "border-black bg-gray-100 font-semibold"
                          : "border-gray-300 hover:border-gray-500"
                  }`}
              >
                {category}
              </button>
          ))}
        </div>
        <button
            aria-label="Cart"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-gray-500 hover:cursor-pointer"
        >
          <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
      <div className={`flex flex-row flex-wrap justify-center gap-8 p-4`}>
        {products?.map((product) => <ProductCard product={product} handleAddToCart={handleAddToCart} key={product.id} />)}
      </div>
    </>
  )
}

export default App
