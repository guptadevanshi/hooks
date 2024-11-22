import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    
    const updateNum1 = () =>{
        setNum1(e.target.value);
    }
    const updateNum2 = () => {
        setNum2(e.target.value);
    };

  return (
    <>
      <h1>Basic Calculator</h1>
      <input type="text" value={num1} onChange= {updateNum1} />
      <br />
      <input type="text" value={num2} onChange= {updateNum2} />
      <br />
      <h1>Result:(result)</h1>
      <button> Addition </button>
      <button> Subtraction </button>
      <button> Multiply </button>
      <button> Divide </button>
      <button> Remainder </button>
    </>
  );
};

export default Calculator;