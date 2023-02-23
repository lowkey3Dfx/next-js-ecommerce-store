'use client';

import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';
import styles from './page.module.scss';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.addToCartComponent}>
      <div className={styles.h3Header}>
        <h3>Amount:</h3>
      </div>
      <div className={styles.counter}>
        <button
          onClick={() => {
            // set count inside input field
            setCount(count - 1);

            const productsInCookies = getParsedCookie('productCookie');
            // if there is no cookie we initialize the value  with 1
            if (!productsInCookies) {
              setStringifiedCookie(
                'productCookie'[{ id: props.params.id, amount: 1 }],
              );
              // if there is no cookie function stop here
              return;
            }
          }}
        >
          {' '}
          -{' '}
        </button>
        <input placeholder="0" value={count} />
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
      <div className={styles.addToCart}>
        <button
          onClick={() => {
            // get the cookie
            const productsInCookies = getParsedCookie('productCookie');
            // if there is no cookie we initialize the value  with 1
            if (!productsInCookies) {
              setStringifiedCookie(
                'productCookie'[{ id: props.params.id, amount: 1 }],
              );
              // if there is no cookie function stop here
              return;
            }
          }}
          className={styles.addToCartButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// first we get an array of objects
// then we check if that id is in there
//
