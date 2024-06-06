import { renderHook } from "@testing-library/react";
import { act } from "react";
import useTodos from "./useTodos";

describe("useTodos", () => {
  it("should add todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Test Todo");
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].title).toBe("Test Todo");
  });

  it("should toggle a todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Test Todo");
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id, true);
    });

    expect(result.current.todos.find((todo) => todo.id === id)?.completed).toBe(
      true
    );
  });

  it("should clear completed todos", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Test Todo 1");
      result.current.addTodo("Test Todo 2");
    });

    const todo1 = result.current.todos[0];
    const todo2 = result.current.todos[1];

    act(() => {
      result.current.toggleTodo(todo1.id, true);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos).toEqual([todo2]);
  });
});
