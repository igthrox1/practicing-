import { useRef } from "react";
import { IoAddCircle } from "react-icons/io5";


function AddTodo({ onNewItem }) {
  
  
  const todoNameElement = useRef();
  const duedateElement = useRef();

 
  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = duedateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value='';
    duedateElement.current.value='';
    console.log(`todo name:${todoName} due Date ${dueDate}`)
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input ref = {duedateElement} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;