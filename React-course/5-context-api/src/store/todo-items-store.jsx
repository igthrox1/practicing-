import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsStore = createContext({
  todoItems :[],
  addNewItem: () => {},
  deleteItem: () => {},
});


const todoItemReducer = (currTodoItems, action) => {
  let newTodoitems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoitems = [
      ...currTodoItems,
      {
        TodoName: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoitems = currTodoItems.filter(
      (currTodoItems) => currTodoItems.TodoName !== action.payload.itemName
    );
  }
  return newTodoitems;
};


const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          itemName,
          itemDueDate,
        },
      };
      dispatchTodoItems(newItemAction);
    };

    const deleteItem = (todoItemName) => {
      const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
          itemName: todoItemName,
        },
      };
      dispatchTodoItems(deleteItemAction);
    };

     return (
     <TodoItemsStore.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >{children}</TodoItemsStore.Provider>
     );
}

export default TodoItemsContextProvider;