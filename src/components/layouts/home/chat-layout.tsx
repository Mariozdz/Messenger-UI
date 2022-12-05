import { useState } from "react";
import { IChat } from "src/shared/types/common/i-chat";

import { ChatListSide } from "src/components/containers/chat/chats-list-side";
import { ChatSide } from "src/components/containers/chat/chat-side";

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
    <div className="flex h-screen w-screen items-center justify-center p-8 rounded-lg">
      <div className="flex flex-row h-full w-full shadow-2xl border border-gray-200">
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
