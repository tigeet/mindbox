import React from "react";
import { render, fireEvent, screen, Screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./app";
import { container } from "webpack";

const addTodo = (value: string) => {
  const inputField = screen.getByPlaceholderText("Title");

  fireEvent.change(inputField, { target: { value } });

  const addButton = screen.getByRole("submit");
  fireEvent.click(addButton);
};

const toggleTodo = (title: string) => {
  const todoToToggle = screen.getByText(title);
  fireEvent.click(todoToToggle);
};

const setView = (view: string) => {
  const tab = screen.getByText(view);
  fireEvent.click(tab);
};

describe("App", () => {
  it("add todo works", () => {
    render(<App />);

    addTodo("New Todo");

    const todoItem = screen.getByText("New Todo");
    expect(todoItem).toBeInTheDocument();
  });

  it("active view works", () => {
    const { queryByText } = render(<App />);
    addTodo("Todo 1");
    addTodo("Todo 2");

    toggleTodo("Todo 2");

    setView("active");
    const todo1 = queryByText("Todo 1");
    const todo2 = queryByText("Todo 2");

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeNull();
  });

  it("completed view works", () => {
    const { queryByText } = render(<App />);
    addTodo("Todo 1");
    addTodo("Todo 2");

    toggleTodo("Todo 2");

    setView("completed");
    const todo1 = queryByText("Todo 1");
    const todo2 = queryByText("Todo 2");
    expect(todo1).toBeNull();
    expect(todo2).toBeInTheDocument();
  });
});
