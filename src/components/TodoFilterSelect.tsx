//imports
import type { TodoFilter } from '../types';
import '../styles/TodoFilterSelect.css';

//type with value, rule and props for function TodoFilterSelect
type TodoFilterSelectProps = {
  value: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
};
//function that show UI with options to filter tasks as 'complete' 'incomplete' and all tasks
function TodoFilterSelect({ value, onFilterChange }: TodoFilterSelectProps) {
  return (
    <select
      className="todo-filter-select"
      value={value}
      onChange={(e) => onFilterChange(e.target.value as TodoFilter)}
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Incomplete</option>
    </select>
  );
}

export default TodoFilterSelect;
