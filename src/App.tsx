import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TODOI from "./interfaces/Todointerface";

const App = () => {
  const [todos, setTodos] = useState<TODOI[]>([
    {
      id: 1,
      text: "do",
      completed: false,
    },
    {
      id: 2,
      text: "do eat",
      completed: true,
    },
  ]);

  const addTodo = (todo: string): void => {
    const data: TODOI = {
      id: todos.length > 1 ? 1: todos[todos.length - 1].id + 1 ,
      text: todo,
      completed: false,
    };

  setTodos((prevTodos:TODOI[]):TODOI[] => [...prevTodos, data]);
  window.alert("todo added successfully");
  };

const completeTodo=(id:number):void=>{
  const currentTodo: TODOI | any=todos.find((todo:TODOI)=> 
  todo.id===id );
currentTodo.completed=true;

  console.log(currentTodo);

  const updatedTodos:TODOI[]=todos.map(
    (todo: TODOI):TODOI=>
    todo.id=== id ? currentTodo:todo)

  setTodos(updatedTodos);
  window.alert("well done");
};
const deleteTodo = (id: number): void => {
  const updatedTodos:TODOI[]=todos.filter(
    (todo:TODOI):any=>todo.id!==id
  );
  setTodos(updatedTodos);
  window.alert("delete successfully");

};


  return (
    <div className="container">
      <h1 className="text-center my-2">React Typescript ToDo</h1>
      <div className="row flex-column">
        <Form addTodo={addTodo} />
        <List todos={todos}  completeTodo={completeTodo}  deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
};

export default App;
