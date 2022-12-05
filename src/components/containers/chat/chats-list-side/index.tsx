import { useState } from "react";
import { ChatCard } from "src/components/common/chat-card";
import { Header } from "src/components/common/header";
import { IChat } from "src/shared/types/common/i-chat";
import { v4 as uuidv4 } from "uuid";

import dogImage from "../../../../../public/images/doggi.jpg";
import { ChatListHeader } from "./chat-list-header";

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
    <div className="flex flex-col h-full w-full md:w-1/3">
      <Header className="rounded-tl-lg" image={dogImage} />

      <ChatListHeader
        searchValue={inputValue}
        onChangeSearchValue={setInputValue}
      />

      <div className="space-y-4 overflow-y-scroll px-4 scrollbar pb-8">
        {chats.map((chat) => (
          <ChatCard chat={chat} setChatSelected={onSelectChat} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
