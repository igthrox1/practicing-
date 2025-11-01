import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from "react";
import { TodoItemsStore } from "../store/todo-items-store";

function TodoItem({ TodoName, Tododate }) {
  const { deleteItem } = useContext(TodoItemsStore);
  
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{Tododate}</div>
        <div class="col-2 hi">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(TodoName)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
