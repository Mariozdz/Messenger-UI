import { useState } from "react";
import { IChat } from "src/shared/types/common/i-chat";

import { ChatListSide } from "src/components/containers/chat/chats-list-side";
import { ChatSide } from "src/components/containers/chat/chat-side";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPhone,
  faMessage,
  faUserGear,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export type Conversation = {
  message: string;
  userId: string;
};

export function ChatLayout() {
  const myId = "1235";

  const other = "1111";

  const conversations: Conversation[] = [
    { message: "puto prro pelón", userId: "1234" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1234" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1234" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1234" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
    { message: "pelón", userId: "1235" },
  ];

  const [chatSelected, setChatSelected] = useState<IChat | undefined>(
    undefined
  );

  return (
    <div className="flex h-screen w-screen items-center justify-center p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="flex flex-row h-full w-full shadow-2xl rounded-lg">
        <div
          className={clsx(
            "flex flex-col justify-between w-32 pt-5 items-center bg-back bg-opacity-80 rounded-l-2xl"
          )}
        >
          <div className="text-white text-5xl font-semibold">P.</div>
          <div className="flex flex-col space-y-16">
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-white"
                onClick={() => alert("chili se la come")}
                size="2xl"
                width={40}
              />
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white"
                onClick={() => alert("chili se la come")}
                size="2xl"
                width={40}
              />
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faMessage}
                className="text-white"
                onClick={() => alert("chili se la come")}
                size="2xl"
                width={40}
              />
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faUserGear}
                className="text-white"
                onClick={() => alert("chili se la come")}
                size="2xl"
                width={40}
              />
            </div>
          </div>
          <div className="text-white text-5xl font-semibold">
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faSun}
                className="text-white"
                onClick={() => alert("chili se la come")}
                size="2xl"
                width={40}
              />
            </div>
          </div>
        </div>
        <ChatListSide onSelectChat={setChatSelected} />

        <ChatSide
          selectedChat={chatSelected}
          userId={other}
          myId={myId}
          conversations={conversations}
        />
      </div>
    </div>
  );
}
