import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import { overrideTailwindClasses } from "tailwind-override";

type HeaderProps = {
  image: StaticImageData;
  title?: ReactElement | string;
  className?: string;
};

export function Header({ image, title, className }: HeaderProps) {
  return (
    <div
      className={overrideTailwindClasses(
        clsx(
          "flex flex-row w-full items-center py-12 px-4 bg-back shadow-lg border-b border-gray-600 rounded-tr-2xl bg-opacity-80",
          className
        )
      )}
    >
      <div className="w-16">
        <div className="rounded-full w-12 h-12 bg-black">
          <Image src={image} className="rounded-full" alt="_#" />
        </div>
      </div>
      <div className="flex flex-col">
        {title && <div className="text-white">{title}</div>}
        {title && <div className="text-gray-600">Ultima vez el 22/22/22</div>}
      </div>
    </div>
  );
}
