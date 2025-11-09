import {PRODUCTS_BASE_URL} from "../config.ts";
import useSWR from "swr";
import {useMemo, useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/outline";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";


const fetcher = (url: string) => fetch(url).then(r => r.json())
const baseUrl = PRODUCTS_BASE_URL

export default function Navigation({ cartCount, filter, setFilter }: {
  cartCount: number,
  filter: string,
  setFilter: (filter: string) => void,
}) {
  const { data, error } = useSWR<string[]>(
      `${baseUrl}/categories`,
      fetcher
  );

  if (error) return <div className="p-6 text-red-600">Failed to load</div>;

  const categories = useMemo(
      () => ["All", ...(data ?? [])],
      [data]
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
      <>
        <nav className="sticky relative top-0 w-full bg-white/15 backdrop-blur-2xl px-6 py-4 flex items-center">
          <div className="text-xl shrink-0 whitespace-nowrap font-semibold">E-Commerce</div>
          <div className={`hidden md:block flex-1 `}>
            <div className="flex justify-center gap-4">
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
          </div>
          <div className={`w-full md:w-fit min-w-0 flex gap-4 justify-end`}>
            <button
                aria-label="Cart"
                className="relative inline-flex items-center justify-center w-6 h-6 rounded-full hover:cursor-pointer"
            >
              <ShoppingCartIcon/>
              {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center">
              {cartCount}
            </span>
              )}
            </button>
            <button
                type="button"
                aria-label="Toggle categories"
                onClick={() => setMobileOpen(o => !o)}
                className="md:hidden inline-flex items-center justify-center w-6 h-6"
            >
              <Bars3Icon/>
            </button>
          </div>
          {mobileOpen && (
              <div className="absolute right-0 top-full z-50 md:hidden">
                <div className="mx-6 mt-2 rounded-md border border-gray-200 bg-white p-3 shadow-md">
                  <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                  >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                    ))}
                  </select>
                </div>
              </div>
          )}
        </nav>
      </>
  );
}