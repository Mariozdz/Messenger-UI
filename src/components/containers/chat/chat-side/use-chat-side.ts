import { Conversation } from "@/components/layouts/home/chat-layout";
import { KeyboardEventHandler, MutableRefObject, useEffect, useRef, useState } from "react";

type IUseChatSideProps = {
    userId: string;
    myId: string;
    conversations: Conversation[];
}

type IUseChatSideHook = {
    chat: Conversation[],
    handleInputSubmit: () => void,
    messagesEndRef: MutableRefObject<any>,
}

export function useChatSide( {conversations, userId, myId}: IUseChatSideProps): IUseChatSideHook {

 const [counter, setCounter] = useState<number>(0);

  const [chat, setChat] = useState<Conversation[]>(conversations);

  const [inputValue, setInputValue] = useState<string>("");

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  function handleInputSubmit() {
    if (!inputValue) return;

    setChat((prev) => [
      ...prev,
      {
        message: inputValue,
        userId: counter % 2 === 0 ? myId : userId,
      },
    ]);
    setInputValue("");

    setCounter((prev) => prev + 1);
  }



  return {

    chat,
    handleInputSubmit,
    messagesEndRef,
  }

}