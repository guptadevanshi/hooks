import React, { useState } from 'react'

const UseStateObject = () => {
    const [person,setPerson]=useState({
        name:"Kartik",
        age:29,
        Hobby:"Coding"
    });
    const handleClick = () =>
        {
            setPerson({...person,name:"Vivek"});
        }
    return (
      <div>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <h5>{person.hobby}</h5>
        <button onClick= {handleClick}>Update</button>
      </div>
    );
};

export default UseStateObject;

//vani singh