// import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  product: string;
  price: string;
  accessory: string | null;
  solution_name: string;
  text_one: string | null;
  text_two: string | null;
};

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT * FROM products`;

  return products;
});

// export async function getProducts() {
//   const products = await sql`
//   SELECT * FROM products`;

//   return products;
// }

// query that gets a single product, because of this I rewrite product to id
export const getProduct = cache(async (id: number) => {
  const [singleProduct] = await sql<Product[]>`
  SELECT * FROM products WHERE id = ${id}
  `;
  return singleProduct;
});
// export async function getSingleProduct(id) {
//   const [singleProduct] = await sql`
//   SELECT * FROM products WHERE id = ${id}

//   `;
//   return singleProduct;
// }
