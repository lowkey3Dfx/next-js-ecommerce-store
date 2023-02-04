'use client';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h3>Amount:</h3>
      <button onClick={() => setCount(count - 1)}> – </button>
      <input placeholder="0" value={count} />
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
