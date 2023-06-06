import { Header } from "src/components/common/header";
import { Message } from "src/components/common/messages/message";
import { MessageContainer } from "src/components/common/messages/message-container";
import dogImage from "@/public/images/doggi.jpg";
import { v4 } from "uuid";
import { useChatSide } from "./use-chat-side";
import { ActionFooter } from "../chats-list-side/action-footer";
import clsx from "clsx";
import { IChat } from "../../../../shared/types/i-chat";
import { Conversation } from "@/components/layouts/home/chat-layout";

type ChatSideProps = {
  selectedChat?: IChat;
  userId: string;
  myId: string;
  conversations: Conversation[];
  handleOpenSettings: (value: boolean) => void;
  settingsState: boolean;
};

export function ChatSide({
  selectedChat,
  userId,
  myId,
  conversations,
  handleOpenSettings,
  settingsState,
}: ChatSideProps) {
  const { chat, handleInputSubmit, messagesEndRef } = useChatSide({
    conversations,
    userId,
    myId,
  });

  const chatName =
    selectedChat && selectedChat?.members.length > 1
      ? selectedChat?.groupName
      : selectedChat?.members[0].UserName;

  return (
    <div
      className={clsx(
        "hidden md:flex md:flex-col h-full w-full md:w-2/3",
        !settingsState ? "md:w-2/3" : "md:w-1/3"
      )}
    >
      <Header
        image={dogImage}
        title={chatName}
        handleOpenSettings={handleOpenSettings}
        settingsState={settingsState}
      />

      <div className="h-full overflow-hidden hover:overflow-y-scroll bg-back scrollbar bg-opacity-80">
        {chat.map((conversation) => (
          <MessageContainer
            message={conversation.message}
            isMine={conversation.userId === myId}
            key={v4()}
          >
            <Message
              message={conversation.message}
              isMine={conversation.userId === myId}
            />
          </MessageContainer>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ActionFooter handleInputSubmit={handleInputSubmit} />
    </div>
  );
}
