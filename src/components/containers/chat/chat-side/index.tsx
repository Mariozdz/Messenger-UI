import { Header } from "src/components/common/header";
import { Message } from "src/components/common/messages/message";
import { MessageContainer } from "src/components/common/messages/message-container";
import empty from "@/public/images/empty.png";
import { v4 } from "uuid";
import { useChatSide } from "./use-chat-side";
import { ActionFooter } from "../chats-list-side/action-footer";
import clsx from "clsx";
import { IChat } from "../../../../shared/types/i-chat";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CryptoUtils } from "../../../../shared/utils/crypto-utils";

type ChatSideProps = {
  socket: any;
  wsKey?: CryptoJS.lib.WordArray;
  selectedChat?: IChat;
  handleOpenSettings: (value: boolean) => void;
  settingsState: boolean;
};

export function ChatSide({
  socket,
  wsKey,
  selectedChat,
  handleOpenSettings,
  settingsState,
}: ChatSideProps) {
  const { handleInputSubmit, messagesEndRef } = useChatSide();

  const chatName =
    selectedChat && selectedChat?.members.length > 1
      ? selectedChat?.groupName
      : selectedChat?.members[0].userName;

  const [messages, setMessages] = useState<IChat | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(false);

  async function getChatMessages(chat: IChat) {
    try {
      setIsLoading(true);

      const result = await fetch(`http://localhost:8080/Groups/Messages`, {
        method: "POST",
        body: JSON.stringify({
          socketID: socket.id,
          time: new Date(),
          ID: chat.id,
        }),
      });

      const values = await result.text();

      const messages = CryptoUtils.decryptText<IChat>(values, wsKey);

      setMessages(messages);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!selectedChat) {
      return;
    }

    getChatMessages(selectedChat).then(
      () => {},
      () => {}
    );
  }, [selectedChat]);

  return (
    <div
      className={clsx(
        "hidden md:flex md:flex-col h-full w-full md:w-2/3",
        !settingsState ? "md:w-2/3" : "md:w-1/3"
      )}
    >
      {selectedChat ? (
        <>
          <Header
            image={selectedChat?.url}
            title={chatName}
            handleOpenSettings={handleOpenSettings}
            settingsState={settingsState}
          />

          {isLoading ? (
            <div className="flex h-full items-center justify-center bg-back bg-opacity-80">
              <svg className="h-12 w-12 animate-spin" viewBox="3 3 18 18">
                <path
                  className="fill-purple-200"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                />
                <path
                  className="fill-purple-800"
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                />
              </svg>
            </div>
          ) : (
            <div className="h-full overflow-hidden hover:overflow-y-scroll bg-back scrollbar bg-opacity-80">
              {selectedChat.messages &&
                selectedChat.messages.map((conversation) => (
                  <MessageContainer
                    message={conversation.content}
                    isMine
                    key={v4()}
                  >
                    <Message message={conversation.content} isMine />
                  </MessageContainer>
                ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          <ActionFooter handleInputSubmit={handleInputSubmit} />
        </>
      ) : (
        <div className="flex items-center justify-center h-full bg-back bg-opacity-80">
          <div className=" w-1/2">
            <Image src={empty} className="flex" alt="#_" />
          </div>
        </div>
      )}
    </div>
  );
}
