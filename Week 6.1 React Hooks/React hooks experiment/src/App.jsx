// By pushing the state down to the component, the whole app re-rendering problem can be solved.

// import { useState } from "react";

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title="Anil"></Header>
//       <Header title="Anil1"></Header>
//       <Header title="Anil2"></Header>
//       <Header title="Anil3"></Header>
//     </>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is Anil!");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title!</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// React Memo - Memo lets you skip re-rendering a component when its props are unchanged.

// By using react memo, the whole app re-rendering problem can be solved.

// import { useState} from "react";
// import React, {Fragment} from "react";

// function App() {
//   const [title, setTitle] = useState("My name is Anil!");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the Title</button>
//       <Header title={title}></Header>
//       <Header title="Anil"></Header>
//       <Header title="Anil1"></Header>
//       <Header title="Anil2"></Header>
//       <Header title="Anil3"></Header>
//       <Header title="Anil3"></Header>
//       <Header title="Anil3"></Header>
//     </div>
//   );
// }

// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

// Key Components

import { useState } from "react";
import React, { Fragment } from "react";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Read Book",
      description: "The four agreements!",
    },
    {
      id: 2,
      title: "Go to Gym",
      description: "Train legs today!",
    },
    {
      id: 3,
      title: "Code for 6 Hours",
      description: "Learning react now!",
    },
  ]);

  function addTodo() {

    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  //   const newTodos = [];
  //   for (let i = 0; i < todo.length; i++) {
  //     newTodos.push(todos[i]);
  //   }
  //   newTodos.push({
  //     id: 4,
  //     title: Math.random(),
  //     description: Math.random(),
  //   });
  //   setTodos(newTodos);
  // }
  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function (todo) {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>

      <h5>{description}</h5>
    </div>
  );
}

export default App;
