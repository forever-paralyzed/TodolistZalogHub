//imports
import { useState, type SubmitEvent } from 'react';
import '../styles/TodoForm.css';
//type with rules and props for TodoForm
type TodoFormProps = {
  onAdd: (title: string) => void;
};
//function that add new task in list if its not empty, and not full of "spaces"
function TodoForm({ onAdd }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); //function that doesnt let page repoad if we click on button

    const title = newTodo.trim(); //deleting all spaces in name
    if (!title) return; //return if its not title

    onAdd(title);
    setNewTodo('');
  }
  //UI
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo">New task</label>
      <input
        className="todo-form__input"
        id="new-todo"
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Some action"
      />
      <button className="todo-form__button" type="submit">
        add
      </button>
    </form>
  );
}

export default TodoForm;
