import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ChangeEventHandler } from "react";

import CheckIcon from "@static/check.svg";
import "./checkbox.css";
type Props = {
  className?: string;
  checked: boolean;
  onChange?: ChangeEventHandler;
};
const cnCheckbox = cn("checkbox");
const Checkbox = ({ className, checked, onChange }: Props) => {
  return (
    <span className={clsx(className, cnCheckbox({ checked }))}>
      <input
        type="checkbox"
        className={cnCheckbox("control")}
        checked={checked}
        onChange={(event) => onChange?.(event)}
      />

      {checked && (
        <CheckIcon className={cnCheckbox("tick")} variant="primary" size="sm" />
      )}
    </span>
  );
};

export default Checkbox;
