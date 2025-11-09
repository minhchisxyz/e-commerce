import useSWR from "swr";
import ProductCard from "./components/Product.tsx";
import type {Product, Variant} from "./types/product.ts";
import { useState} from "react";
import { PRODUCTS_BASE_URL } from "./config.ts";
import Navigation from "./components/Navigation.tsx";

const fetcher = (url: string) => fetch(url).then(r => r.json())
const baseUrl = PRODUCTS_BASE_URL

function App() {
  const [filter, setFilter] = useState<string>("All");
  const [cartCount, setCartCount] = useState<number>(0);

  const productsUrl =
      filter === "All"
          ? baseUrl
          : `${baseUrl}?category=${encodeURIComponent(filter)}`;

  const { data: products, error: productsError } = useSWR<Product[]>(productsUrl, fetcher);

  const handleAddToCart = (_product: Product, _variant: Variant) => {
    setCartCount(c => c + 1);
  };

  if (productsError) return <div className="p-6 text-red-600">Failed to load</div>;
  return (
    <>
      <Navigation cartCount={cartCount} filter={filter} setFilter={setFilter} />
      <div className={`flex flex-row flex-wrap justify-center gap-8 p-4`}>
        {products?.map((product) => <ProductCard product={product} handleAddToCart={handleAddToCart} key={product.id} />)}
      </div>
    </>
  )
}

export default App
