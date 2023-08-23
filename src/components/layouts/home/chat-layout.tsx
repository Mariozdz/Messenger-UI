import { useEffect, useState } from "react";
import { ChatListSide } from "src/components/containers/chat/chats-list-side";
import { ChatSide } from "src/components/containers/chat/chat-side";
import { OptionsSideBar } from "@/components/containers/options-side-bar/options-side-bar";
import { SettingsSidebar } from "@/components/containers/settings-sidebar/settings-sidebar";
import { IChat } from "../../../shared/types/i-chat";
import { CryptoUtils } from "../../../shared/utils/crypto-utils";
import { useStoreState } from "../../../shared/hooks/store-hook";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

export type Conversation = {
  message: string;
  userId: string;
};

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

type ChatLayoutProps = {
  groups: any;
};

export function ChatLayout({ groups }: ChatLayoutProps) {
  const { token } = useStoreState((state) => state.session);

  if (!socket && token) {
    socket = io("http://localhost:8080", {
      transports: ["websocket", "polling"],
      query: { token: token },
    });
  }

  const [chatSelected, setChatSelected] = useState<IChat | undefined>(
    undefined
  );

  const [wsKey, setWsKey] = useState<CryptoJS.lib.WordArray>();

  useEffect(() => {
    if (!socket) {
      return;
    }

    function connect() {
      // eslint-disable-next-line no-console
      console.log("conectado :D");
    }

    function getWSKey(key: any) {
      const WSKey = CryptoUtils.parseKey(key);
      setWsKey(WSKey);
    }

    socket.on("connect", connect);
    socket.on("WSKey", getWSKey);

    return () => {
      socket.off("connect", connect);
      socket.off("WSKey", getWSKey);
    };
  }, []);

  function handleSelect(chat: IChat) {
    setChatSelected(chat);
  }

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="flex flex-row h-full w-full shadow-2xl">
        <OptionsSideBar />
        <ChatListSide onSelectChat={handleSelect} groups={groups} />
        <ChatSide
          socket={socket}
          wsKey={wsKey}
          selectedChat={chatSelected}
          handleOpenSettings={setIsSideBarOpen}
          settingsState={isSideBarOpen}
        />
        <SettingsSidebar isOpen={isSideBarOpen} />
      </div>
    </div>
  );
}
