import { getProducts } from '../../database/products';
import Cart from './CartPage';

export const metadata = {
  title: 'Cart',
  description: 'Cart Page where all the items in the cart are listed',
};

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const products = await getProducts();
  // passing props from database
  // console.log(products);
  return <Cart products={products} />;
}
