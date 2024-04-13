// // // Wrapper components

import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <CardWrapper>
        <div>Hi there!</div>
      </CardWrapper>
      <CardWrapper>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          commodi modi, quod, dolores necessitatibus quo a, suscipit asperiores
          maxime alias magni cumque vitae voluptatibus cum aperiam! Ut
          consectetur praesentium commodi.
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          commodi modi, quod, dolores necessitatibus quo a, suscipit asperiores
          maxime alias magni cumque vitae voluptatibus cum aperiam! Ut
          consectetur praesentium commodi.
        </div>
      </CardWrapper>
  </div>
  );
}

 function CardWrapper({ children }) {
   console.log(children);
   return (
     <div style={{ border: "1px solid black", padding: "15px", margin: '5px', width: '200px', outline: 'none', background: 'yellow', display: 'flex', flexDirection: 'row'}}>{children}</div>
   );
 }

 export default App;

// Assignment

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       });
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;
