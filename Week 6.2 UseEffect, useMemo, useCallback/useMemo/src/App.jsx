import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalcount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <br />
      <button
        onClick={function () {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
}

export default App;
