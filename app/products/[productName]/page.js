import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../../database/products';
import Counter from '../../Counter';
import styles from '../page.module.scss';

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
    <div>
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
      <Image
        src={`/${singleProduct.product}-${singleProduct.id}.jpg`}
        alt={singleProduct.accessory}
        className={styles.imageCard}
        width="360"
        height="640"
      />
      <Counter />
    </div>
  );
}
