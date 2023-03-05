import { useEffect, useState } from "react";
import { IChat } from "src/shared/types/common/i-chat";

import { ChatListSide } from "src/components/containers/chat/chats-list-side";
import { ChatSide } from "src/components/containers/chat/chat-side";
import { io } from "socket.io-client";
import { log } from "console";
import { CryptoUtils } from "src/shared/utils/crypto-utils";

export type Conversation = {
  message: string;
  userId: string;
};

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling"],
});

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

  const [wsKey, setWsKey] = useState<CryptoJS.lib.WordArray>();

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("conectado :D");
  //   });

  //   socket.on("WSKey", function (key) {
  //     const WSKey = CryptoUtils.parseKey(key);

  //     console.log("wskey", key);

  //     setWsKey(WSKey);
  //   });

  //   socket.on("Log In", function (encryptedUser) {
  //     console.log("ggg ", wsKey);

  //     console.log(
  //       CryptoUtils.decryptText(encryptedUser, wsKey as CryptoJS.lib.WordArray)
  //     );
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("Log In");
  //     socket.off("WSKey");
  //   };
  // }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center p-8 rounded-lg">
      <div className="flex flex-row h-full w-full shadow-2xl border border-gray-200">
        <ChatListSide
          onSelectChat={() => {
            console.log("Hola hola");

            socket.emit("messenger", "0");
          }}
        />

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
