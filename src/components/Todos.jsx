const Todos = ({ todos, handleDelete, handleEdit }) => {
  // console.log(props);

  return (
    <div>
      {todos.map((todo) => (
        <div>
          {todo.title} <button onClick={() => handleDelete(todo.id)}>X</button>
          {""}
          <button onClick={() => handleEdit(todo.id)}>edit</button>{""}
        </div>
      ))}
    </div>
  );
};

export default Todos;
