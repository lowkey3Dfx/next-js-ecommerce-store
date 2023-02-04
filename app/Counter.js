'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      <input placeholder="0" value={count} />
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
