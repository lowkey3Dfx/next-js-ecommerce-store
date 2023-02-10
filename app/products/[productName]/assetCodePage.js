/* 'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { products } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss'; */

export const dynamic = 'force-dynamic';

// ProductPage because single Product page
export default function ProductPage(props) {
  console.log();

  const [count, setCount] = useState(0);
  /* find single product name */
  const singleProduct = products.find((item) => {
    return item.product.toLowerCase() === props.params.productName;
  });

  if (!singleProduct) {
    notFound();
  }
  return (
    <div className={styles.singlePageProduct}>
      <h1>
        {/* creating Product Name and capitalizing first letter */}
        {props.params.productName.charAt(0).toUpperCase() +
          props.params.productName.slice(1)}{' '}
        your Product
      </h1>

      <p>
        {singleProduct.solutionName} is the best solution for{' '}
        {singleProduct.accessory}
      </p>
      <div className={styles.productContainer} key={products.id}>
        <div className={styles.productCard}>
          <Image
            src={`/${singleProduct.product}-${singleProduct.id}.jpg`}
            alt={singleProduct.accessory}
            className={styles.imageCard}
            width="360"
            height="640"
          />
        </div>
        <div className={styles.descriptionAndCounter}>
          <h2>
            {props.params.productName.charAt(0).toUpperCase() +
              props.params.productName.slice(1)}{' '}
          </h2>
          <p>
            Improvements in image capturing and modeling, virtual showrooms, and
            computer vision will make VR and AR more efficient and more
            effective. These trends and other will help make 3D a critical part
            of future eCommerce.
          </p>
          <p>
            Developing 3D marketing materials: VR and AR can be used in your
            marketing to tell your brands story, showcase your products and
            create promotional content. However you need to tell a great story.
          </p>
          <h3 className={styles.price} key={singleProduct.id}>
            {singleProduct.price}
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
                onClick={
                  () => {
                    setCount(count + 1);
                    const productsInCookies = getParsedCookie('productCookie');
                    // if there is no cookie we initialize the value  with 1
                    if (!productsInCookies) {
                      setStringifiedCookie(
                        'productCookie'[{ id: props.id, amount: 1 }],
                      );

                      // if there is no cookie function stop here
                      return;
                    }
                  }

                  // set count inside input field
                }
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
