import { getProduct } from '../../../database/products';
import Product from './product';

export const dynamic = 'force-dynamic';

// dynamic data for SEO Browser Tab description / didn't work because auf next.js version

// export async function generateMetadata(props) {
//   const singleProduct = await getProduct(props.params.productId);
//   console.log('generateMetadata', props);
//   return {
//     title: `Product page for ${singleProduct.product}`,
//     description: '',
//     icons: {
//       shortcut: '/favicon.ico',
//     },
//   };
// }

// here we get the props and pass them to Product.js

export default async function ProductPage(props) {
  // const singleProduct = products.find((item) => {
  //   return item.product.toLowerCase() === params.productName;
  // });
  const singleProduct = await getProduct(props.params.productId);

  // props that are being passed to Products.js are called item
  return <Product propItem={singleProduct} />;
}
