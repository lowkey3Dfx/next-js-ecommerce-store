import '../global.scss';
import Counter from '../../app/Counter';
import styles from './page.module.scss';

// Cart page
export default function productsCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className={styles.shoppingCartCard}>
        <img src="/#" alt="Product inside cart" />
      </div>
      {/* <CartCounter /> */}
      <Counter className={styles.counter} />
    </div>
  );
}
