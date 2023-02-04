import '../global.scss';
import Counter from '../Counter';
import styles from './page.module.scss';

export default function productsCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className={styles.shoppingCartCard}>
        <img src="/#" alt="Product inside cart" />
        <Counter className={styles.counter} />
      </div>
    </div>
  );
}
