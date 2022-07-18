import React, { useState } from 'react'

function CounterState() {
  const [count, setCount] = useState(0)
  function increment() {
    console.log(`before setState:${count}`);
    setCount((currntCount) => currntCount + 1);
    setCount((currntCount) => currntCount + 1);
    console.log(`after seState ${count}`);
  }
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

export default CounterState