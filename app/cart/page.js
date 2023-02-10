import '../global.scss';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

export default function productsCart() {
  return (
    <div className={styles.cartPageContainer}>
      <h1>Shopping Cart</h1>
      <div className={styles.shoppingCartCard}>
        <img src="/#" alt="Product inside cart" />
      </div>
      <div>{getParsedCookie('productCookie')}</div>
    </div>
  );
}
