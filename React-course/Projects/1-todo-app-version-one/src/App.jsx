import Appname from './components/appname.jsx';
import AddTodo from './components/addtodo.jsx';
import TodoItem1 from './components/todoItem1.jsx';
import TodoItem2 from "./components/todoItem2.jsx";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <Appname />
        <AddTodo />
        <div className="itemsContainer">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </>
  );
}

export default App
