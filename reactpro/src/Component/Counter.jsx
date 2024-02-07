import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementby, setIncrementby] = useState(1);
  function handleClickIncre() {
    setCount(count + incrementby);
  }
  function handleClickDecre() {
    setCount(count - incrementby);
  }
  function increaseIncrement() {
    setIncrementby(incrementby + 1);
  }
  function decreaseDecrement() {
    setIncrementby(incrementby - 1);
  }
  return (
    <div>
      <h1>Count value is {count}</h1>
      <button onClick={handleClickIncre}>Increment</button>
      <button onClick={handleClickDecre}>Decrement</button>

      <h1>We are incrementing the value by {incrementby}</h1>
      <button onClick={increaseIncrement}>Increase!</button>
      <button onClick={decreaseDecrement}>Decrease!</button>
    </div>
  );
}
