import { TodoItemsStore } from "../store/todo-items-store";
import styles from "./welcomeMsg.module.css";
import { useContext } from "react";

function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemsStore);
  return todoItems.length === 0  && <p className={styles.message}>Enjoy Your Day</p>;
}

export default WelcomeMsg;