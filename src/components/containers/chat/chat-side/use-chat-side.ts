import { Conversation } from "@/components/layouts/home/chat-layout";
import { MutableRefObject, useEffect, useRef, useState } from "react";

type IUseChatSideHook = {
  handleInputSubmit: () => void;
  messagesEndRef: MutableRefObject<any>;
};

export function useChatSide(): IUseChatSideHook {
  const [counter, setCounter] = useState<number>(0);

  const [chat, setChat] = useState<Conversation[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  function handleInputSubmit() {
    if (!inputValue) {
      return;
    }

    setChat((prev) => [
      ...prev,
      {
        message: inputValue,
        userId: "",
      },
    ]);
    setInputValue("");

    setCounter((prev) => prev + 1);
  }

  return {
    handleInputSubmit,
    messagesEndRef,
  };
}
