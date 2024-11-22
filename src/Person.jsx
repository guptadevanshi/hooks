import React, { useState } from 'react'

const Person = () => {
    const [emp, setEmp] = useState({
        name:"Abhinav",
        age: 23,
        gender: "male",
    });
    const handleUpdate = () => {
        setEmp ({...emp, name: "Sita"});
    };
  return (
    <div>
        <h2>{emp.name}</h2>
        <h3>I am {emp.age} years old </h3>
        <h4> {emp.gender}</h4>
        <button onClick ={handleUpdate}>Update</button>
    </div>
  );
};

export default Person;