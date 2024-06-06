import React, { useCallback, useMemo, useState } from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
import useTodos from "@hooks/useTodos/useTodos";
import Todo from "@components/todo/todo";
import TabSelector from "@components/tabSelector/tabSelector";
import PlusIcon from "@static/plus.svg";
import ItemsLeft from "@components/itemsLeft/itemsLeft";
import IconButton from "@components/iconButton/iconButton";
import ClearButton from "@components/clearButton/clearButton";

import "./reset.css";
import "./global.css";
import "./App.css";

const VIEW = ["all", "active", "completed"] as const;
type TView = (typeof VIEW)[number];

const cnApp = cn("app");

function App() {
  const { todos, addTodo, toggleTodo, clearCompleted } = useTodos();
  const [view, setView] = useState<TView>("all");

  const [draft, setDraft] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draft === "") return;
    addTodo(draft);
    setDraft("");
  };

  const itemsLeftCount = useMemo(
    () => todos.filter(({ completed }) => completed === false).length,
    [todos]
  );

  const displayedTodos = useMemo(
    () =>
      view === "all"
        ? todos
        : todos.filter((todo) =>
            view === "active" ? !todo.completed : todo.completed
          ),
    [todos, view]
  );

  const handleTodoChange = useCallback(
    (id: string, completed: boolean) => toggleTodo(id, completed),
    [toggleTodo]
  );

  return (
    <div className={cnApp()}>
      <nav className={clsx(cnApp("nav"))}>
        <ItemsLeft value={itemsLeftCount} />
        <TabSelector
          className={cnApp("tabSelector")}
          selected={view}
          onSelect={(value) => setView(value)}
          labels={VIEW}
        />

        <ClearButton onClick={clearCompleted} />
      </nav>

      <main className={cnApp("main")}>
        <div className={cnApp("content")}>
          <section>
            <form className={cnApp("actions")} onSubmit={handleSubmit}>
              <input
                className={cnApp("draft")}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Title"
              />
              <IconButton role="submit" icon={<PlusIcon />} />
            </form>
          </section>

          <section>
            <ul className={cnApp("todos")}>
              {displayedTodos.map((todo) => (
                <Todo
                  as="li"
                  key={todo.id}
                  {...todo}
                  onChange={handleTodoChange}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
