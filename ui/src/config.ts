const fromVite = (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_BASE_URL) as string | undefined;
export const API_BASE_URL = fromVite || (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000");

const trimSlash = (s: string) => s.replace(/\/+$/, "");
export const PRODUCTS_BASE_URL = `${trimSlash(API_BASE_URL)}/api/products`;