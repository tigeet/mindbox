import React, { MouseEventHandler, memo } from "react";

import { cn } from "@bem-react/classname";
import clsx from "clsx";
import ClearIcon from "@static/trash-2.svg";
import IconButton from "@components/iconButton/iconButton";

import "./clearButton.css";

type Props = {
  className?: string;
  onClick: MouseEventHandler;
};

const cnClearButton = cn("clearButton");
const ClearButton = ({ className, onClick }: Props) => {
  return (
    <>
      <button
        className={clsx(className, cnClearButton({ large: true }))}
        onClick={onClick}
      >
        Clear completed
      </button>
      <IconButton
        onClick={onClick}
        className={clsx(className, cnClearButton({ small: true }))}
        icon={<ClearIcon className={cnClearButton("clearIcon")} />}
      />
    </>
  );
};
export default memo(ClearButton);
