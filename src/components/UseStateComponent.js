import React, { useState } from 'react';

function UseStateComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className='use-state-component'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default UseStateComponent;