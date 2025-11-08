import {useState} from "react";
import type {Product, Variant} from "../types/product.ts";

function ProductCard({ product, handleAddToCart }: { product: Product, handleAddToCart: (product: Product, variant: Variant) => void}) {
  // State to manage the selected variant
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);

  return (
      <div className="w-60 bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-start text-sm">
        {/* Product Image */}
        <div className="w-full h-50 flex justify-center mb-4">
          <img className="w-full h-auto object-contain"
               loading="lazy"
               src={product.image || 'https://placehold.co/600x400?text=Hello+World'}
               alt={product.name}
               />
        </div>

        <h3 className="h-[40px] text-base font-medium text-gray-900 mb-4 leading-tight">{product.name}</h3>

        <div className="flex gap-2 mb-4">
          {product.variants.map((variant) => (
              <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-3 py-1 text-xs rounded-md border hover:cursor-pointer ${
                      selectedVariant.id === variant.id
                          ? 'border-gray-900 bg-gray-100 font-semibold'
                          : 'border-gray-300 text-gray-700 hover:border-gray-500'
                  }`}
              >
                {variant.name}
              </button>
          ))}
        </div>

        <p className="text-xl font-bold text-gray-900 mb-4">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(selectedVariant.price)}
        </p>

        <button
            className={`text-white px-6 py-2 rounded-2xl font-semibold text-xs transition-colors ${selectedVariant.amount > 0 ? 'bg-black hover:bg-gray-800 hover:cursor-pointer' : 'bg-gray-300'}`}
            onClick={() => handleAddToCart(product, selectedVariant)}
            disabled={selectedVariant.amount === 0}
        >
          {selectedVariant.amount > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
  );
}

export default ProductCard;