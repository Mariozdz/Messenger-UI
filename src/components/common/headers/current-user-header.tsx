import Image from "next/image";
import { UserState } from "../../../shared/constants/user-state";
import clsx from "clsx";
import { useStoreState } from "../../../shared/hooks/store-hook";

interface CurrentUserHeaderProps {
  userName: string;
  lastTime: string;
  state?: UserState;
  userPhoto: any;
}

export function CurrentUserHeader({
  userName,
  lastTime,
  state = UserState.ACTIVE,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userPhoto,
}: CurrentUserHeaderProps) {
  const { url } = useStoreState((state) => state.user);

  return (
    <>
      <div className="w-16">
        <div className="rounded-full  w-16 h-16 bg-black">
          <Image
            src={`${url}`}
            width={100}
            height={100}
            className="rounded-full"
            alt="_#"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow ml-3 text-lg font-semibold">
        <div className="flex flex-row items-center space-x-2 text-white">
          <p>{userName}</p>
          <div
            className={clsx(
              "w-3 h-3 rounded-full shadow",
              state === UserState.ACTIVE ? "bg-green-400" : "bg-red-400"
            )}
          />
        </div>
        <div className="text-gray-400">{lastTime}</div>
      </div>
    </>
  );
}
