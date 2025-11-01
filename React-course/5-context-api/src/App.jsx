import Appname from './components/appname.jsx';
import AddTodo from './components/addtodo.jsx';
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
import WelcomeMsg from "./components/welcomeMsg.jsx"
import  TodoItemsContextProvider  from './store/todo-items-store.jsx';


function App() {
  

  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <Appname />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App
