import React, { useState } from "react";

const BasicUseState = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount((currentCount) => {
    //   const newCount = currentCount + 1;
    //   console.log("value of count:", newCount);
    //   return newCount;
    // });
    console.log("button clicked");
    setTimeout(() => {
      setCount((oldValue) => oldValue + 1);
    }, 3000);
  };

  return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default BasicUseState;
