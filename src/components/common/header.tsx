import clsx from "clsx";
import Image from "next/image";
import { ReactElement } from "react";
import { overrideTailwindClasses } from "tailwind-override";

type HeaderProps = {
  image?: string;
  title?: ReactElement | string;
  className?: string;
  handleOpenSettings: (value: boolean) => void;
  settingsState: boolean;
};

export function Header({
  image,
  title,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleOpenSettings = () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  settingsState = false,
}: HeaderProps) {
  return (
    <div
      className={overrideTailwindClasses(
        clsx(
          "flex flex-row w-full items-center py-12 px-4 bg-back shadow-lg border-b border-gray-600 bg-opacity-80",
          className
        )
      )}
    >
      <div className="w-16">
        <div className="rounded-full w-12 h-12 bg-purple-600">
          {image ? (
            <Image
              src={`${image}`}
              width={100}
              height={100}
              className="rounded-full"
              alt="#_"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-2xl text-white front-bold">
              {(title && typeof title === "string" && title[0]) || "A"}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        {title && <div className="text-white">{title}</div>}
        {title && <div className="text-gray-600">Ultima vez el 22/22/22</div>}
      </div>
      {/*<button*/}
      {/*  className="w-32 bg-white h-6"*/}
      {/*  onClick={() => handleOpenSettings(!settingsState)}*/}
      {/*/>*/}
    </div>
  );
}
