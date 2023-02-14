import { getSingleProduct } from '../../../database/products';
import Product from './product';

// here we get the props and pass them to Product.js

export default async function ProductPage({ params }) {
  // const singleProduct = products.find((item) => {
  //   return item.product.toLowerCase() === params.productName;
  // });
  const singleProduct = await getSingleProduct(params.productId);
  console.log(singleProduct);
  console.log(params.productName);
  // props that are being passed to Products.js are called item
  return <Product propItem={singleProduct} />;
}
