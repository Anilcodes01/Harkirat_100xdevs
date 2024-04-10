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

// import { useState, useMemo } from "react";

// const words = ['hi', 'my', 'name', 'is', 'for', 'to', 'random', 'word'];
// const TOTAL_LINES = 1000
// const ALL_WORDS = [];

// for(let i = 0; i<TOTAL_LINES; i++) {
//   let sentence = '';
//   for(let j=0; j<words.length; j++) {
//     sentence +=(words[Math.floor(words.length * Math. random())])
//     sentence += ' '
//   }
//   ALL_WORDS.push(sentence)
// }

//  function assignment2() {
//   const [sentences, setSentences]= useState(ALL_WORDS)
//   const [filter, setFilter] = useState('')

// const filteredSentences = useMemo(() => {
//   return sentences.filter(x => x.includes(filter))
// }, [sentences, filter])

// return <div>
//   <input type="text"onChange={function(e) {
//     setFilter(e.target.value)
//   }}></input>
//   {filteredSentences.map(word=> <div>{word}</div>)}
// </div>

//  }

//  export default assignment2

// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useState, useMemo } from "react";


const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "chocolate", value: 10 },
    { name: "chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
  ]);

  const totalValue = useMemo(() => {
    let totalValue = 0;
    for(let i =0; i< items.length; i++){
      totalValue = totalValue + items[i].value;
    }
    return totalValue
  }, [items])

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
export default Assignment3