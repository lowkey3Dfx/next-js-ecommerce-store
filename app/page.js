import Image from 'next/image';
import Logo from '../public/Logo.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.mainBody}>
      <div>
        <h1 className={styles.h1Animation}>lowkey 3D</h1>
        <p>Unite creativity and vision</p>
      </div>
    </main>
  );
}
