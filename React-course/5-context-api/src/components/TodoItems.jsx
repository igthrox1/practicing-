import { useContext } from "react";
import { TodoItemsStore } from "../store/todo-items-store.jsx";
import TodoItem from "./todoItem.jsx"
import styles from "./TodoItems.module.css";

const TodoItems = ({ onDeleteClick }) => {
  
  const { todoItems } = useContext(TodoItemsStore);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            TodoName={item.TodoName}
            Tododate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;