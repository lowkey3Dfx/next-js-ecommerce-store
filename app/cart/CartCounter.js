'use client';
import products from '../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies.js';

export default function CartCounter() {
  return (
    <div>
      {/* <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productCookie');
          // if there is no cookie we initialize the value  with 1
          if (!productsInCookies) {
            setStringifiedCookie(
              'productCookie'[{ id: products.id, amount: 1 }],
            );
            // if there is no cookie function stop here
            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === products.id;
          });
          // product is inside of cookie
          if (foundProduct) {
            foundProduct.amount++;
            // my product in not inside the cookie
          } else {
            productsInCookies.push({ id: products.id, amount: 1 });
          }

          // update the cookie with new values
          setStringifiedCookie('productCookie', productsInCookies);
        }}
      >
        Remove Item
      </button> */}
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productCookie');
          // if there is no cookie we initialize the value  with 1
          if (!productsInCookies) {
            setStringifiedCookie(
              'productCookie'[{ id: products.id, amount: 1 }],
            );
            // if there is no cookie function stop here
            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === products.id;
          });
          // product is inside of cookie
          if (foundProduct) {
            foundProduct.amount++;
            // my product in not inside the cookie
          } else {
            productsInCookies.push({ id: products.id, amount: 1 });
          }

          // update the cookie with new values
          setStringifiedCookie('productCookie', productsInCookies);
        }}
      >
        Add Item
      </button>
      ;
    </div>
  );
}
