'use client';
import styles from './page.module.scss';

export default function CookieBanner() {
  return (
    <div className={styles.cookieBanner}>
      <p>This is our Cookie policy accept or leave immediately</p>
      <button>Accept Cookie</button>
    </div>
  );
}
