import { useState } from "react";

type UseActionFooterProps = {
  handleInputSubmit: () => void;
};

type UseActionFooterHook = {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleOnPressEnter: (event: any) => any;
};

export function useActionFooter({
  handleInputSubmit,
}: UseActionFooterProps): UseActionFooterHook {
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnPressEnter = (event: any) => {
    console.log(event);

    if (event.key === "Enter") {
      handleInputSubmit();
    }
  };

  return {
    inputValue,
    setInputValue,
    handleOnPressEnter,
  };
}
