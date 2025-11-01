import TodoItem from "./todoItem.jsx"
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem TodoName={item.TodoName} Tododate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;