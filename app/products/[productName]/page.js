import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../../database/products';
import Counter from '../../Counter';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

// ProductPage because single Product page
export default function ProductPage(props) {
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
      <div className={styles.productContainer}>
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
          <Counter className={styles.counter} />
        </div>
      </div>
    </div>
  );
}
