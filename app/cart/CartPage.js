'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

// Cart page
export default function Cart({ products }) {
  const [productsCookieValue, setProductsCookieValue] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const productsCookie = getParsedCookie('productCookie');
    const cookieState = productsCookie === undefined ? false : productsCookie;
    setProductsCookieValue(cookieState);
    console.log(productsCookie);
  }, []);
  // get cookies value, if cookies value does not exist state will be false

  let productsCookieParsed = [];

  if (productsCookieValue) {
    productsCookieParsed = productsCookieValue;
  }
  // if productsCookieValue state is true set productsCookieParsed Array true

  const productsWithAmounts = products.map((product) => {
    const productWithAmounts = { ...product, amount: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );
    // add amount key to product object

    if (productInCookie) {
      productWithAmounts.amount = productInCookie.amount;
    }
    return productWithAmounts;
    // return product with amount key and value
  });

  const runningSum = () => {
    const total = productsWithAmounts.reduce((accumulator, product) => {
      return accumulator + product.price * product.amount;
    }, 0);
    return total;
  };
  // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step

  return (
    <div className={styles.cartPageContainer}>
      <h1>Shopping Cart</h1>
      {productsWithAmounts.some((item) => item.amount > 0) ? (
        productsWithAmounts.map((item) => {
          if (item.amount > 0) {
            return (
              <div key={item.id}>
                <div key={item.id}>
                  <div
                    key={item.id}
                    className={styles.shoppingCartCard}
                    data-test-id={`cart-product-${item.id}`}
                  >
                    <div className={styles.imageDiv}>
                      <Image
                        className={styles.image}
                        src={`/${item.product}-${item.id}.jpg`}
                        alt={item.product}
                        width="90"
                        height="160"
                      />
                    </div>
                    <div className={styles.textField}>
                      <h2>{item.product} your product</h2>

                      <p data-test-id={`cart-product-quantity-${item.id}`}>
                        Solution amount in cart: {item.amount}
                      </p>
                      <p className={styles.price}>€ {item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div className={styles.noItems}>No items in your Shopping Cart 👻</div>
      )}
      {productsWithAmounts.some((item) => item.amount > 0) && (
        <div>
          <div>
            <div className={styles.checkoutDiv}>
              <p data-test-id="cart-total">
                Total: € {runningSum().toFixed(2)}
              </p>
              <Link href="checkout">
                <button data-test-id="cart-checkout" className={styles.btn}>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
