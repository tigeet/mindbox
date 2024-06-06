import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { memo } from "react";
import Checkbox from "@components/checkbox/checkbox";
import formatDate from "@utils/formatDate";

import "./todo.css";

type Props = {
  as?: JSX.ElementType;
  className?: string;
  onChange: (id: string, completed: boolean) => void;
  id: string;
  title: string;
  createdAt: Date;
  completed: boolean;
};

const cnTodo = cn("todo");
const Todo = ({
  completed,
  title,
  id,
  onChange,
  className,
  createdAt,
  as: ElementType = "div",
}: Props) => {
  const handleClick = () => onChange(id, !completed);

  return (
    <ElementType className={clsx(className, cnTodo())} onClick={handleClick}>
      <Checkbox className={cnTodo("checkbox")} checked={completed} />
      <span className={cnTodo("title", { completed })}>{title}</span>
      <span className={cnTodo("date")}>{formatDate(createdAt)}</span>
    </ElementType>
  );
};

export default memo(Todo);
