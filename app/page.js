import Image from 'next/image';
import Logo from '../public/Logo.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.mainBody}>
      <Image className={styles.image} src={Logo} alt="Background Logo" />
      <h1>Lowkey 3D</h1>
    </main>
  );
}
