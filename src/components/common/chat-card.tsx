import Image from "next/image";
import { IChat } from "src/shared/types/common/i-chat";
import dogImage from "../../../public/images/doggi.jpg";
import { overrideTailwindClasses } from "tailwind-override";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IChatCardProps = {
  setChatSelected: (value: IChat) => void;
  chat: IChat;
};

export function ChatCard({ setChatSelected, chat }: IChatCardProps) {
  const date = new Date();
  return (
    <div
      className={overrideTailwindClasses(
        "transition ease-in-out duration-100 flex flex-row shadow-md w-full border-b border-gray-600 h-32 px-5 cursor-pointer hover:h-34"
      )}
      onClick={() => {
        setChatSelected(chat);
      }}
    >
      <div className="flex items-center justify-center">
        <div className="rounded-full w-18 h-18 bg-black">
          <Image src={dogImage} className="rounded-full" alt="#_" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center ml-6">
        <div className="text-white font-semibold text-xl">{chat.name}</div>
        <div className=" text-lg text-gray-600"> {chat.message}</div>
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
