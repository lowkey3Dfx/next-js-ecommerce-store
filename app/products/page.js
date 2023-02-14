import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function ProductsPage() {
  const products = await getProducts();
  const productCookie = cookies().get('productCookie');
  // created default value for productCookieParsed
  let productCookieParsed = [];
  if (productCookie) {
    productCookieParsed = JSON.parse(productCookie.value);
  }
  // adding amount to Products Array

  const productsWithAmount = products.map((item) => {
    const productWithAmount = { ...item, amount: 0 };

    // I read the cookie and find the product
    const productInCookie = productCookieParsed.find(
      (itemObject) => item.id === itemObject.id,
    );
    // if I find the product I update the count of amount
    if (productInCookie) {
      productWithAmount.amount = productInCookie.amount;
    }
    return productWithAmount;
  });

  return (
    <>
      <h1 className={styles.productCardContainer}>
        Product Visualization Solutions for eCommerce
      </h1>

      <main className={styles.productCardContainer}>
        {productsWithAmount.map((item) => {
          return (
            <div key={item.id} className={styles.productCard}>
              <Link href={`/products/${item.id}`}>
                <img
                  src={`/${item.product}-${item.id}.jpg`}
                  alt={item.accessory}
                  className={styles.imageCard}
                />
              </Link>
              <Link href={`/products/${item.id}`}>
                <h2 key={item.id}>{item.product}</h2>
              </Link>
              <div className={styles.productCardAmount}>
                <h2>Amount: {item.amount}</h2>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
