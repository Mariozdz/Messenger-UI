import Image from "next/image";
import { overrideTailwindClasses } from "tailwind-override";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IChat } from "../../shared/types/i-chat";

type IChatCardProps = {
  setChatSelected: (value: IChat) => void;
  chat: IChat;
};

export function ChatCard({ setChatSelected, chat }: IChatCardProps) {
  const date = new Date();

  const { groupName, url } = chat;

  const chatName =
    chat?.members.length > 0 ? groupName : chat.members[0].userName;

  const chatDescription =
    chat?.messages && chat?.messages?.length > 0
      ? chat.messages[0].content
      : "...";

  return (
    <div
      className={overrideTailwindClasses(
        "flex shadow-md w-full border-b border-gray-600 h-32 px-5 cursor-pointer"
      )}
      onClick={() => {
        setChatSelected(chat);
      }}
    >
      <div className="flex items-center justify-center">
        <div className="rounded-full w-18 h-18 bg-purple-600">
          {url ? (
            <Image
              src={`${url}`}
              width={100}
              height={100}
              className="rounded-full"
              alt="#_"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl text-white front-bold">
              {(chatName && chatName[0]) || "A"}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow justify-center ml-6">
        <div className="flex text-white font-semibold text-xl">{chatName}</div>
        <span className=" max-w-124 mr-1 text-lg text-gray-600 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {chatDescription}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center pr-3">
        <div className="flex text-white">{date.toTimeString().slice(0, 5)}</div>
        <div className="flex flex-row relative">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={20}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute left-1.5"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={20}
          />
        </div>
      </div>
    </div>
  );
}
