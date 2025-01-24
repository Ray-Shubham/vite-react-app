import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("products");
  const [age,setAge] = useState(0);

  useEffect(() => {
    console.log("useEffect rendering...");
    document.title = `You clicked ${age} times`;
    fetchData();
  }, [type, age]);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status == 200) {
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changeTypeHandler = (each) => {
    setType(each);
  };

  const ageHandler = () => {
    setAge(age + 1);
  }
  return (
    <>
      <h1>UseEffect Example</h1>
      <button onClick={ageHandler}>Increment Age</button>
      {["products", "carts", "users"].map((each) => (
        <button onClick={() => changeTypeHandler(each)}>{each}</button>
      ))}
      <h3>{type}</h3>
      {data.map((each) => (
        <>
          <pre>{JSON.stringify(each)}</pre>
        </>
      ))}
    </>
  );
};

export default UseEffectExample;
