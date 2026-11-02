//imports
import type { Todo } from '../types';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

//type with props and rules for function TodoList
type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};
//function that show all tasks
function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="todo-list__empty">No tasks yet. Add a first one!</p>
    ); //show user text if no tasks yet
  }
  //UI and component
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
