import { useState } from "react";

export function useVisible(): {
  visibleForm: boolean;
  visibleTable: boolean;
  displayTable: () => void;
  displayForm: () => void;
} {
  const [visible, setVisible] = useState<"table" | "form">("table");

  const displayTable = () => setVisible("table");
  const displayForm = () => setVisible("form");

  return {
    visibleForm: visible === "form",
    visibleTable: visible === "table",
    displayTable,
    displayForm,
  };
}
