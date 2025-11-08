export type Variant = {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string | null;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string | null;
  variants: Variant[];
};