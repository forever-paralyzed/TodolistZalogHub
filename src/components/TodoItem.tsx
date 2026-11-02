import type { Todo } from '../types';
import DeleteBtnTodo from './DeleteBtnTodo';
import '../styles/TodoItem.css';
type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={`todo-item__title${todo.completed ? ' todo-item__title--completed' : ''}`}
        >
          {todo.title}
        </span>
      </label>
      <DeleteBtnTodo onDelete={() => onDelete(todo.id)} />
    </li>
  );
}

export default TodoItem;
