// //object declaration
// type Person = {
//   name: string;
//   age?: number; //? makes it optional
// };
// let person: Person = {
//   name: "John",
// };

// let age: number | string;

// function printName(name: string) {
//   console.log(name);
// }

// printName("Hello World");

// let pName: (name: string) => string; //function

// interface People {
//   name: string;
//   age?: number;
// };

import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/todolist";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="Ap">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
