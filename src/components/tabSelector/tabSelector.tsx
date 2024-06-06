import React, { memo } from "react";

import "./tabSelector.css";
import { cn } from "@bem-react/classname";
import clsx from "clsx";

type Props<T extends string> = {
  labels: readonly T[];
  selected: T;
  className?: string;
  onSelect: (value: T) => void;
};

const cnTabSelector = cn("tabSelector");

const TabSelector = <T extends string>({
  labels,
  className,
  onSelect,
  selected,
}: Props<T>) => {
  return (
    <div className={clsx(className, cnTabSelector())}>
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          className={cnTabSelector("option", { selected: label === selected })}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default memo(TabSelector) as <T extends string>(
  props: Props<T>
) => JSX.Element;
