import Appname from './components/appname.jsx';
import AddTodo from './components/addtodo.jsx';
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/welcomeMsg.jsx"

function App() {
  const [todoItems , setTodoItems] = useState([]);

  const handleNewItem = ( todoName, dueDate) => {
    const newTodoitems = [
      ...todoItems,
      { TodoName: todoName, dueDate: dueDate },
    ];
    setTodoItems(newTodoitems);
  };
  
  const handleDeleteItem = (todoItemName) => {
    const newTodoitems = todoItems.filter(
      (todoItems) => todoItems.TodoName !== todoItemName
    );
    setTodoItems(newTodoitems);
  };

  
  return (
    <>
      <center className="todo-container">
        <Appname />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length == 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App
