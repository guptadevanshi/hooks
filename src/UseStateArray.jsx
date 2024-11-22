import React from "react";
import { useState } from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [students, setStudents] = useState(data);
  const removeHandle =(id) => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
            {student.name}<br/> cgpa:{student.cgpa} 
            <button className="btn" onClick = {() => removeHandle(student.id)}>
                Remove
            </button>
            </div>
      ))}
    </>
  );
};

export default UseStateArray;
