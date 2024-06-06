import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { memo } from "react";

import "./itemsLeft.css";
type Props = {
  className?: string;
  value: string | number;
};

const cnItemsLeft = cn("itemsLeft");

const ItemsLeft = ({ className, value }: Props) => {
  return (
    <span className={clsx(className, cnItemsLeft())}>
      <span className={cnItemsLeft("large")}>
        <span className={cnItemsLeft("value")}>{value}</span> items left
      </span>
      <span className={cnItemsLeft("small")}>{value}</span>
    </span>
  );
};

export default memo(ItemsLeft);
