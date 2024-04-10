// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

// import { useMemo, useState } from "react";

// function App() {
//   const [input, setInput] = useState(1);

//   const expensiveValue = useMemo(() => {
//     let value = 1;
//     for (let i = 1; i <= input; i++) {
//       value = value * i;
//     }
//     return value;
//   }, [input]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={function (e) {
//           setInput(Number(e.target.value));
//         }}
//       />

//       <p>Expensive value: {expensiveValue}</p>
//     </div>
//   );
// }

// export default App;




// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array


