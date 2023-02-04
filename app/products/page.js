import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export default function ProductsPage() {
  return (
    <>
      <h1 className={styles.productCardContainer}>
        Product Visualization Solutions for eCommerce
      </h1>
      <main className={styles.productCardContainer}>
        {products.map((item) => {
          return (
            <div key={item.id} className={styles.productCard}>
              <Link href={`/products/${item.product.toLowerCase()}`}>
                <img
                  src={`/${item.product}-${item.id}.jpg`}
                  alt={item.accessory}
                  className={styles.imageCard}
                />
              </Link>
              <Link href={`/products/${item.product.toLowerCase()}`}>
                <h2 key={item.id}>{item.product}</h2>
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
