import { useCallback, useState } from "react";
import type { ITodo } from "types";
import { makeId } from "utils/makeId";

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = useCallback(
    (title: string) =>
      setTodos((todos) => [
        ...todos,
        { id: makeId(), completed: false, createdAt: new Date(), title },
      ]),
    []
  );

  const toggleTodo = useCallback(
    (id: string, completed: boolean) =>
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      ),
    []
  );

  const clearCompleted = useCallback(
    () => setTodos((todos) => todos.filter((todo) => !todo.completed)),
    []
  );

  return { todos, addTodo, toggleTodo, clearCompleted };
};

export default useTodos;
