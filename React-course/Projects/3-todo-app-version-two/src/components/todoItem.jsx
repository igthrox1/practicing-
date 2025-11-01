function TodoItem({ TodoName, Tododate }) {
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{Tododate}</div>
        <div class="col-2 hi">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
