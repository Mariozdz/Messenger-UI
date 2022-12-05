import Image from "next/image";
import { IChat } from "src/shared/types/common/i-chat";
import dogImage from "../../../public/images/doggi.jpg";
import { overrideTailwindClasses } from "tailwind-override";

type IChatCardProps = {
  setChatSelected: (value: IChat) => void;
  chat: IChat;
};

export function ChatCard({ setChatSelected, chat }: IChatCardProps) {
  const date = new Date();
  return (
    <div
      className={overrideTailwindClasses(
        "flex flex-row bg-white shadow-md hover:shadow-xl w-full h-28 rounded-3xl border border-gray-200 px-5 cursor-pointer"
      )}
      onClick={() => {
        setChatSelected(chat);
      }}
    >
      <div className="flex items-center justify-center">
        <div className="rounded-full w-16 h-16 bg-black">
          <Image src={dogImage} className="rounded-full" alt="#_" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center ml-4">
        <div className="text-black font-bold text-xl">{chat.name}</div>
        <div className=" text-lg"> {chat.message}</div>
      </div>
      <div className="flex mt-6">{date.toTimeString().slice(0, 5)}</div>
    </div>
  );
}
