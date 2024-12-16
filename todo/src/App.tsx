import "./App.css";
import Child from "./components/Child";
import Parent from "./components/Parent";

const App = () => {
  const triggerButton = () => alert("trigger");
  return (
    <>
      <button onClick={triggerButton}>click me</button>
      <Parent />
      <Child />
    </>
  );
};

export default App;
