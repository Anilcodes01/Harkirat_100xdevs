import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

const inputFunction = useCallback(() => {
  console.log('Hi there!')
}, [])

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  )
  
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render");

  return (
    <div>
      <button>Click me!</button>
    </div>
  )
  
});

export default App;
