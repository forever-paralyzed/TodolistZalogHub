import '../styles/DeleteBtnTodo.css';

type DeletebtnTodoProps = {
  onDelete: () => void;
};

function DeleteBtnTodo({ onDelete }: DeletebtnTodoProps) {
  return (
    <button className="delete-todo-button" type="button" onClick={onDelete}>
      Delete
    </button>
  );
}

export default DeleteBtnTodo;
