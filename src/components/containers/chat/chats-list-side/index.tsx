import { useState } from "react";
import { ChatCard } from "src/components/common/chat-card";
import { Header } from "src/components/common/header";
import { IChat } from "src/shared/types/common/i-chat";
import { v4 as uuidv4 } from "uuid";
import Image, { StaticImageData } from "next/image";

import dogImage from "../../../../../public/images/doggi.jpg";
import { ChatListHeader } from "./chat-list-header";
import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

type ChatListSideProps = {
  onSelectChat: (value: IChat) => void;
};

export function ChatListSide({ onSelectChat }: ChatListSideProps) {
  const chats: IChat[] = [
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 1 ", message: "Hola" },
    { name: "Prro 2 ", message: "Hola" },
    { name: "Prro 3 ", message: "Hola" },
    { name: "Prro 4 ", message: "Hola" },
  ];

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col h-full w-full md:w-1/3 border border-gray-600">
      <div
        className={overrideTailwindClasses(
          clsx(
            "flex flex-row w-full items-center py-10 px-8 bg-back shadow-lg border-b border-gray-600 bg-opacity-80"
          )
        )}
      >
        <div className="w-16">
          <div className="rounded-full  w-16 h-16 bg-black">
            <Image src={dogImage} className="rounded-full" alt="_#" />
          </div>
        </div>
        <div className="flex flex-col flex-grow ml-3 text-lg font-semibold">
          <div className="text-white">Perro pelón</div>
          <div className="text-gray-400">Ingeniero</div>
        </div>
        <div>
          <div className="pl-4">
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-gray-600"
              onClick={() => alert("chili se la come")}
              size="2xl"
              width={40}
            />
          </div>
        </div>
      </div>

      {/* <ChatListHeader
        searchValue={inputValue}
        onChangeSearchValue={setInputValue}
      /> */}

      <div className="overflow-hidden hover:overflow-y-scroll scrollbar bg-back bg-opacity-80">
        {chats.map((chat) => (
          <ChatCard chat={chat} setChatSelected={onSelectChat} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
