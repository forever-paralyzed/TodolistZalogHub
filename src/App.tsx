//imports
import { useState, useEffect } from 'react';
import type { Todo, TodoFilter } from './types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilterSelect from './components/TodoFilterSelect';
import './styles/App.css';

function App() {
  //states
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos'); //getting saved data from local storage

    return savedTodos ? (JSON.parse(savedTodos) as Todo[]) : [];
  });

  const [filter, setFilter] = useState<TodoFilter>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); //saving data to local storage
  }, [todos]);

  //functions
  //////////////////////////////////
  //function that adds a new task in list
  function addTodo(title: string) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), title, completed: false },
    ]);
  }
  //function that mark task as 'complete' or 'incomplete'
  function toggleTodo(id: number) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  //function that delete selected task
  function deleteTodo(id: number) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id != id));
  }
  //filter that filters tasks as 'completed' 'incomplete' and all tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });
  //////////////////////////////////

  //rendering and invoking components
  return (
    <main className="app">
      <h1>My tasks</h1>
      <TodoForm onAdd={addTodo} /> {/*form component*/}
      <TodoFilterSelect value={filter} onFilterChange={setFilter} />
      {/*Filter component with states 'complete' 'incomplete' and all */}
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      {/*component with list of tasks*/}
    </main>
  );
}

export default App;
