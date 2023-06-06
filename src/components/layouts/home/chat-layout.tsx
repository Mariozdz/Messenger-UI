import { useState } from "react";
import { ChatListSide } from "src/components/containers/chat/chats-list-side";
import { ChatSide } from "src/components/containers/chat/chat-side";
import { OptionsSideBar } from "@/components/containers/options-side-bar/options-side-bar";
import { SettingsSidebar } from "@/components/containers/settings-sidebar/settings-sidebar";
import { IChat } from "../../../shared/types/i-chat";

export type Conversation = {
  message: string;
  userId: string;
};

// const socket = io("http://localhost:8080", {
//   transports: ["websocket", "polling"],
// });

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

  // const [wsKey, setWsKey] = useState<CryptoJS.lib.WordArray>();

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

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="flex flex-row h-full w-full shadow-2xl">
        <OptionsSideBar />
        <ChatListSide onSelectChat={setChatSelected} />
        <ChatSide
          selectedChat={chatSelected}
          userId={other}
          myId={myId}
          conversations={conversations}
          handleOpenSettings={setIsSideBarOpen}
          settingsState={isSideBarOpen}
        />
        <SettingsSidebar isOpen={isSideBarOpen} />
      </div>
    </div>
  );
}
