import { getProducts } from '../../database/products';
import Checkout from './Checkout';
import CheckoutForm from './Form';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page where a form is filled out',
};

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formDiv}>
          <h3>Checkout</h3>
          <CheckoutForm />
        </div>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.productsDiv}>
          <Checkout products={products} />
        </div>
      </div>
    </div>
  );
}
