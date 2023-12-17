import { Dispatch, SetStateAction, useState } from "react";

export function useVisible(): {
  visible: "table" | "form";
  setVisible: Dispatch<SetStateAction<"table" | "form">>;
} {
  const [visible, setVisible] = useState<"table" | "form">("table");

  return {
    visible,
    setVisible,
  };
}
