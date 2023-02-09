'use client';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.addToCartComponent}>
      <h3>Amount:</h3>
      <div className={styles.counter}>
        <button onClick={() => setCount(count - 1)}> - </button>
        <input placeholder="0" value={count} />
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
      <div className={styles.addToCart}>
        <button onClick className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
