import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

const randomID = ()=>{
  return Math.floor(Math.random() * 10000) + 1
}

const App = () => {
  const [todos/*actual state value*/, setTodos/*setter function*/] = useState([])

  const handleAdd = (todo)=>{
    const newTodo = {id:randomID(), title:todo, completed:false}
    setTodos([...todos, newTodo])
  }

  const handleDelete = (id)=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  const handleEdit = (id)=>{
    const newTitle = prompt("Enter your edited todo title")
    if(newTitle==="") return newTitle
    setTodos(
      todos.map(todo=>
        todo.id === id ? {...todo, title:newTitle, completed:false} : todo
      )
    )
  }
  return (
    <div>
      <h1>Todo List</h1>
      <Header handleAdd = {handleAdd} />
      <Todos handleEdit={handleEdit} handleDelete={handleDelete} todos/*we can name it anything, this is a prop name*/={todos} />
    </div>
  );
};

export default App;
