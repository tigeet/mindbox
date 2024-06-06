import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TabSelector from "./tabSelector";

describe("TabSelector", () => {
  const labels = ["Option 1", "Option 2", "Option 3"];
  const selected = "Option 2";

  it("renders correctly", () => {
    const { getByText } = render(
      <TabSelector labels={labels} selected={selected} onSelect={() => null} />
    );

    labels.forEach((label) => {
      expect(getByText(label)).toBeInTheDocument();
      if (label !== selected)
        expect(getByText(label)).not.toHaveClass("tabSelector-option_selected");
    });

    expect(getByText(selected)).toHaveClass("tabSelector-option_selected");
  });

  it("calls onSelect with the correct value", () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <TabSelector labels={labels} selected={selected} onSelect={onSelect} />
    );

    const option = getByText("Option 1");
    fireEvent.click(option);

    expect(onSelect).toHaveBeenCalledWith("Option 1");
  });
});
