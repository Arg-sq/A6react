import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

import Parent from "./components/Parent";

const App = () => {
  const [count, setCount] = useState(10);
  const [gharJagga, setGharJagga] = useState("15bigga");
  const triggerButton = () => {
    setCount(count - 1);
    setCount(count - 1);
  };

  // let count = 0;

  return (
    <>
      {/* <h1>This is my count:{count}</h1> */}
      <button onClick={triggerButton}>click me</button>
      <Parent timroLagiDakshina={count} />
      <Child timlaiJagga={gharJagga} timroLagiDakshina={count} />
    </>
  );
};

export default App;
