/* stylelint-disable-next-line CssSyntaxError */
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { products } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

export default function Product(props) {
  // console.log(props.propItem.id);
  const router = useRouter();

  const [count, setCount] = useState(1);

  return (
    <div className={styles.singlePageProduct}>
      <h1>
        {props.propItem.product.charAt(0).toUpperCase() +
          props.propItem.product.slice(1)}{' '}
      </h1>

      <p>
        {props.propItem.solutionName} is the best solution for{' '}
        {props.propItem.accessory}
      </p>
      <div className={styles.productContainer} key={props.propItem.id}>
        <div className={styles.productCard}>
          <Image
            data-test-id="product-image"
            src={`/${props.propItem.product}-${props.propItem.id}.jpg`}
            alt={props.propItem.accessory}
            className={styles.imageCard}
            width="360"
            height="640"
          />
        </div>
        <div className={styles.descriptionAndCounter}>
          <h2>
            {/* creating Product Name and capitalizing first letter */}
            {props.propItem.product.charAt(0).toUpperCase() +
              props.propItem.product.slice(1)}{' '}
            your Product
          </h2>
          <p>{props.propItem.textOne}</p>
          <p>{props.propItem.textTwo}</p>
          <h3
            className={styles.price}
            key={props.propItem.id}
            data-test-id="product-price"
          >
            {props.propItem.price}
          </h3>
          <div className={styles.addToCartComponent}>
            <div className={styles.h3Header}>
              <h3>Amount: {props.propItem.amount}</h3>
            </div>
            <div className={styles.counter}>
              <button
                onClick={() => {
                  // set count inside input field
                  if (count === 0) {
                    setCount(0);
                  } else {
                    setCount(count - 1);
                  }
                  const productsInCookies = getParsedCookie('productCookie');
                  if (!productsInCookies) {
                    return;
                  }
                  const foundProduct = productsInCookies.find(
                    (productInCookie) => {
                      return productInCookie.id === props.propItem.id;
                    },
                  );
                  // product is inside of cookie
                  if (foundProduct) {
                    foundProduct.amount--;
                    if (foundProduct.amount < 0) {
                      foundProduct.amount = 0;
                    } else {
                      setStringifiedCookie('productCookie', productsInCookies);
                    }
                    // my product in not inside the cookie
                  }
                  // update cookie with new value
                }}
              >
                {' '}
                -{' '}
              </button>
              <input
                placeholder="0"
                defaultValue={count}
                data-test-id="product-quantity"
              />

              <button
                onClick={() => {
                  setCount(count + 1);
                  router.refresh();
                }}

                // set count inside input field
              >
                {' '}
                +{' '}
              </button>
            </div>
            <div className={styles.addToCart}>
              <button
                onClick={() => {
                  setCount(0);
                  const productsInCookies = getParsedCookie('productCookie');
                  // if there is no cookie we initialize the value  with 1
                  if (!productsInCookies) {
                    setStringifiedCookie('productCookie', [
                      { id: props.propItem.id, amount: count },
                    ]);

                    // if there is no cookie function stop here
                    return;
                  }
                  const foundProduct = productsInCookies.find(
                    (productInCookie) => {
                      return productInCookie.id === props.propItem.id;
                    },
                  );
                  // product is inside of cookie
                  if (foundProduct) {
                    foundProduct.amount = foundProduct.amount + count;
                    // my product in not inside the cookie
                  } else {
                    productsInCookies.push({
                      id: props.propItem.id,
                      amount: count,
                    });
                    router.refresh();
                  }
                  // update the cookie with new values
                  setStringifiedCookie('productCookie', productsInCookies);
                  router.refresh();
                }}
                data-test-id="product-add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
