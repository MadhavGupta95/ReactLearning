export const Header = () => {
    return <h1>Task List</h1>;
  };
  
export const Middlelayer = () => {
    const tasks = ["task-1", "task-2", "task-3", "task-4", "task-5"];
    return (
      <>
        {tasks.map((task, index) => {
          return <p>{task}</p>;
        })}
      </>
    );
  };
  
  export const Footer = () => {
    const dateyear = new Date().toDateString();
    return <p>Footer {dateyear}</p>;
  };