import { useState } from "react";

export function MenuItem({ menuItem }) {
  const [qty, setQty] = useState(0);

  function increment() {
    if (qty < 5) {
      setQty(qty + 1);
    }
  }

  function decrement() {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  return (
    <li>
      <button onClick={decrement}>-</button>
      &nbsp;{qty}&nbsp;
      <button onClick={increment}>+</button>
      &nbsp;&nbsp;
      <span>{menuItem.name}</span>
      <hr />
    </li>
  );
}
