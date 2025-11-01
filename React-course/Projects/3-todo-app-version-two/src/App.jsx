import Appname from './components/appname.jsx';
import AddTodo from './components/addtodo.jsx';
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";

function App() {
  const todoItems = [
    {
      TodoName: "buy milk",
      dueDate: "10/27/2025",
    },

    {
      TodoName: "go to college",
      dueDate: "11/27/2025",
    }
  ];
  
  return (
    <>
      <center className="todo-container">
        <Appname />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App
