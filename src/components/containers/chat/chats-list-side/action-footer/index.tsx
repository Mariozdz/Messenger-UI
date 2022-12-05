import { faFaceLaugh, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useActionFooter } from "./use-action-footer";

type ActionFooterProps = {
  handleInputSubmit: () => void;
};

export function ActionFooter({ handleInputSubmit }: ActionFooterProps) {
  const { inputValue, setInputValue, handleOnPressEnter } = useActionFooter({
    handleInputSubmit,
  });

  return (
    <div className="flex h-24 bg-gray-100 px-8 mx-auto justify-between w-full items-center">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={faFaceLaugh}
          className="text-purple-500"
          onClick={() => alert("chili se la come")}
          size="2xl"
          width={40}
        />
      </div>
      <div className="flex items-center w-2/3 bg-white h-12 rounded-lg p-2">
        <input
          value={inputValue}
          onKeyDown={handleOnPressEnter}
          onChange={(value) => {
            setInputValue(value.target.value);
          }}
          className="w-full border-none style-none border-0 outline-0"
        ></input>
      </div>
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full p-2 bg-purple-500 shadow-lg cursor-pointer"
        onClick={handleInputSubmit}
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-white -ml-1"
          size="xl"
          width={30}
        />
      </button>
    </div>
  );
}
