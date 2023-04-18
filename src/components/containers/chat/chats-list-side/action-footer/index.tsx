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
    <div className="flex h-28 bg-back opacity-80 px-8 mx-auto justify-between w-full items-center border-t border-b border-gray-600">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={faFaceLaugh}
          className="text-purple-500"
          onClick={() => alert("chili se la come")}
          size="2xl"
          width={40}
        />
      </div>
      <div className="flex flex-grow items-center h-12 rounded-lg p-2 mx-16">
        <textarea
          value={inputValue}
          onKeyDown={handleOnPressEnter}
          onChange={(value) => {
            setInputValue(value.target.value);
          }}
          placeholder="Write something"
          className="w-full border-none style-none border-0 outline-0 bg-back bg-opacity-80 text-white scrollbar resize-none"
        />
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
