'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { products } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

export default function Product(props) {
  console.log(props.propItem.id);
  const [count, setCount] = useState(0);

  return (
    <div className={styles.singlePageProduct}>
      <h1>
        {/* creating Product Name and capitalizing first letter */}
        {props.propItem.product.charAt(0).toUpperCase() +
          props.propItem.product.slice(1)}{' '}
        your Product
      </h1>

      <p>
        {props.propItem.solutionName} is the best solution for{' '}
        {props.propItem.accessory}
      </p>
      <div className={styles.productContainer} key={products.id}>
        <div className={styles.productCard}>
          <Image
            src={`/${props.propItem.product}-${props.propItem.id}.jpg`}
            alt={props.propItem.accessory}
            className={styles.imageCard}
            width="360"
            height="640"
          />
        </div>
        <div className={styles.descriptionAndCounter}>
          <h2>
            {props.propItem.product.charAt(0).toUpperCase() +
              props.propItem.product.slice(1)}{' '}
          </h2>
          <p>{props.propItem.textOne}</p>
          <p>{props.propItem.textTwo}</p>
          <h3 className={styles.price} key={props.propItem.id}>
            {props.propItem.price}
          </h3>
          <div className={styles.addToCartComponent}>
            <div className={styles.h3Header}>
              <h3>Amount:</h3>
            </div>
            <div className={styles.counter}>
              <button
                onClick={() => {
                  // set count inside input field
                  setCount(count - 1);
                }}
              >
                {' '}
                -{' '}
              </button>
              <input placeholder="0" defaultValue={count} />

              <button
                onClick={() => {
                  setCount(count + 1);
                  const productsInCookies = getParsedCookie('productCookie');
                  // if there is no cookie we initialize the value  with 1
                  if (!productsInCookies) {
                    setStringifiedCookie('productCookie', [
                      { id: props.propItem.id, amount: 1 },
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
                    foundProduct.amount++;
                    // my product in not inside the cookie
                  } else {
                    productsInCookies.push({
                      id: props.propItem.id,
                      amount: 1,
                    });
                  }

                  // update the cookie with new values
                  setStringifiedCookie('productCookie', productsInCookies);
                }}

                // set count inside input field
              >
                {' '}
                +{' '}
              </button>
            </div>
            <div className={styles.addToCart}>
              <button onClick className={styles.addToCartButton}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
