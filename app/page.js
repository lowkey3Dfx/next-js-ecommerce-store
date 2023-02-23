import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main className={styles.mainBody}>
      <div>
        <h1>lowkey 3D</h1>
        <p>Unite creativity and vision</p>
      </div>
    </main>
  );
}
