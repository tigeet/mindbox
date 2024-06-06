import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { MouseEventHandler, ReactNode, forwardRef, memo } from "react";

import "./iconButton.css";
const cnIconButton = cn("iconButton");

type Props = {
  className?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler;
  disabled?: boolean;
};

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, icon, onClick, size = "sm", disabled = false }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={clsx(className, "center", cnIconButton({ size, disabled }))}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "Icon Button";
export default memo(IconButton);
