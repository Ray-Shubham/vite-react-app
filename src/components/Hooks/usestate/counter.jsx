import React, { useState } from "react";

const Counter = () => {
  const [age, setAge] = useState(10);

  const ageHandler = (type) => {
    switch (type) {
      case "INCREMENT":
        // setAge(age=>age + 1);
        setInterval(() => {
            setAge(age=>age + 1);
        }, 1000);
        
        break;
      case "DECREMENT":
        if (age > 0) {
          setAge(age - 1);
        } else {
          alert("Age cannot be less than 0");
        }
        break;
      case "RESET":
        setAge(0);
      default:
        break;
    }
  };

  // const incrementAgeHandler = () => {
  //     setAge(age + 1)
  // }
  // const decrementAgeHandler = () => {
  //     if (age > 0) {
  //         setAge(age - 1)
  //     } else {
  //         alert("Age cannot be less than 0")
  //     }
  // }
  // const reset = () => {
  //     setAge(0)
  // }
  return (
    <>
      <h3>Counter</h3>
      <h3>Current Age {age}</h3>
      <button onClick={()=>ageHandler("INCREMENT")}>Increment Age</button>
      <button onClick={()=>ageHandler("DECREMENT")}>Decrement Age</button>
      <button onClick={()=>ageHandler("RESET")}>Reset</button>
    </>
  );
};

export default Counter;
