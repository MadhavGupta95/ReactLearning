import { use, useState } from "react";

export const Content = () => {
  // let count = 0;
  // const state = useState(0)  //use the initial value of count in useState because it needs to be updated.
  //   let [count, setCount] = useState(0); //destructuring count and setCount
  //   const increment = () => {
  //     setCount((count) => count + 1);
  //   };
  //   const decrement = () => {
  //     setCount((count) => count - 1);
  //   };
  //   const reset = () => {
  //     setCount(0)
  //   };

  const generateRandomId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 100000)}`;
  };

  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [newTitle] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = () => {
    setTodos((todos) => [
      ...todos,
      {
        id: generateRandomId(),
        title: item,
        completed: false,
      },
    ]);
    setItem("");
  };

  const handleDelete = (id) => {
    // console.log(id);
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  const handleEdit = (id) => {
    const edit = prompt("new todo?: ");
    if (edit !== null && edit.trim() !== "") {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: edit, completed: false } : todo
        )
      );
    }
  };
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}

      <h3>
        {todos.length > 0
          ? `your have ${todos.length} todos`
          : "Add the todos to get started"}
      </h3>
      <input value={item} onChange={handleChange} type="text" />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
      <div>
        {todos.map((todo, index) => (
          <li>
            {todo.title}{" "}
            <button onClick={() => handleEdit(todo.id)}>edit</button>{" "}
            <button onClick={() => handleDelete(todo.id)}>X</button>{" "}
          </li>
        ))}
      </div>
    </>
  );
};

// export default content
