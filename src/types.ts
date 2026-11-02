//type for tasks
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
//types for filter
export type TodoFilter = 'all' | 'completed' | 'active';
