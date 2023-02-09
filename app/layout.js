import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import homeIcon from '../public/Logo.png';
import cartIcon from '../public/shopping-cart-icon.png';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head className={styles.header} />
      <body className={styles.main}>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">
                <Image
                  src={homeIcon}
                  alt="Home Button"
                  width="30"
                  height="30"
                />
              </Link>

              <Link href="/products">Solutions</Link>
              {products.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={`/products/${item.product.toLowerCase()}`}
                  >
                    {item.product}
                  </Link>
                );
              })}
            </div>

            <div className={styles.cart}>
              <Link href="/cart">
                <Image
                  src={cartIcon}
                  alt="Home Button"
                  width="28"
                  height="28"
                />
              </Link>
            </div>
          </nav>
        </header>
        <div className={styles.Hero}>{children}</div>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
