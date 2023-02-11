import { useEffect, useRef, useState } from "react";
import { Header } from "src/components/common/header";
import { Message } from "src/components/common/messages/message";
import { MessageContainer } from "src/components/common/messages/message-container";
import { Conversation } from "src/components/layouts/home/chat-layout";
import { IChat } from "src/shared/types/common/i-chat";
import dogImage from "@/public/images/doggi.jpg";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useChatSide } from "./use-chat-side";
import { ActionFooter } from "../chats-list-side/action-footer";

type ChatSideProps = {
  selectedChat?: IChat;
  userId: string;
  myId: string;
  conversations: Conversation[];
};

export function ChatSide({
  selectedChat,
  userId,
  myId,
  conversations,
}: ChatSideProps) {
  const { chat, handleInputSubmit, messagesEndRef } = useChatSide({
    conversations,
    userId,
    myId,
  });

  return (
    <div className="hidden md:flex md:flex-col h-full w-full md:w-2/3 rounded-xl">
      <Header image={dogImage} title={selectedChat?.name} />

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
