import React from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const handlePlus =() => setCount(Count+1)
    const handleMinus = () => setCount(Count-1)

  return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleMinus}>Minus</button>
    </>
  );
};

export default Counter;