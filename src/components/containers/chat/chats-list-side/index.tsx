import { useState } from "react";
import { ChatCard } from "src/components/common/chat-card";
import { v4 as uuidv4 } from "uuid";

import dogImage from "../../../../../public/images/doggi.jpg";
import { ChatListHeader } from "./chat-list-header";
import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CurrentUserHeader } from "@/components/common/headers/current-user-header";
import { IChat } from "../../../../shared/types/i-chat";
import { useStoreState } from "../../../../shared/hooks/store-hook";

type ChatListSideProps = {
  onSelectChat: (value: IChat) => void;
  groups: IChat[];
};

export function ChatListSide({ onSelectChat, groups }: ChatListSideProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const user = useStoreState((state) => state.user);

  console.log(groups);

  return (
    <div className="flex flex-col h-full w-full md:w-1/3 border border-gray-600">
      <div
        className={overrideTailwindClasses(
          clsx(
            "flex flex-row w-full items-center py-10 px-8 bg-back shadow-lg border-b border-gray-600 bg-opacity-80"
          )
        )}
      >
        <CurrentUserHeader
          userName={user.userName || "Undefined"}
          lastTime="Ingeniero"
          userPhoto={dogImage}
        />

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

      <ChatListHeader
        searchValue={inputValue}
        onChangeSearchValue={setInputValue}
      />

      <div className="overflow-hidden hover:overflow-y-scroll scrollbar h-full bg-back bg-opacity-80">
        {groups.map((chat) => (
          <ChatCard chat={chat} setChatSelected={onSelectChat} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
