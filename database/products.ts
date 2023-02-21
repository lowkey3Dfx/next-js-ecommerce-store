// import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  product: string;
  price: string;
  accessory: string | null;
  solutionName: string;
  textOne: string | null;
  textTwo: string | null;
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

// export const products = [
//   {
//     id: 1,

//     product: 'Model',

//     price: '29',

//     accessory: 'Prototyping',

//     solution_name: 'Modeling',

//     text_one: `Improvements in image capturing and modeling, virtual showrooms, and

//   computer vision will make VR and AR more efficient and more

//   effective. These trends and other will help make 3D a critical part

//   of future eCommerce.`,

//     text_two: `Developing 3D marketing materials: VR and AR can be used in your

//   marketing to tell your brands story, showcase your products and

//   create promotional content. However you need to tell a great story.`,
//   },

//   {
//     id: 2,

//     product: 'Render',

//     price: '69',

//     accessory: 'product images',

//     solution_name: 'Rendering',

//     text_one: `Improvements in image capturing and modeling, virtual showrooms, and

//   computer vision will make VR and AR more efficient and more

//   effective. These trends and other will help make 3D a critical part

//   of future eCommerce.`,

//     text_two: `Developing 3D marketing materials: VR and AR can be used in your

//   marketing to tell your brands story, showcase your products and

//   create promotional content. However you need to tell a great story.`,
//   },

//   {
//     id: 3,

//     product: 'Animate',

//     price: '169',

//     accessory: 'digital content',

//     solution_name: 'Animation',

//     text_one: `Improvements in image capturing and modeling, virtual showrooms, and

//   computer vision will make VR and AR more efficient and more

//   effective. These trends and other will help make 3D a critical part

//   of future eCommerce.`,

//     text_two: `Developing 3D marketing materials: VR and AR can be used in your

//   marketing to tell your brands story, showcase your products and

//   create promotional content. However you need to tell a great story.`,
//   },

//   {
//     id: 4,

//     product: 'Visualize',

//     price: '229',

//     accessory: 'brand recognition',

//     solution_name: 'Product Visualisation',

//     text_one: `Improvements in image capturing and modeling, virtual showrooms, and

//   computer vision will make VR and AR more efficient and more

//   effective. These trends and other will help make 3D a critical part

//   of future eCommerce.`,

//     text_two: `Developing 3D marketing materials: VR and AR can be used in your

//   marketing to tell your brands story, showcase your products and

//   create promotional content. However you need to tell a great story.`,
//   },
// ];
