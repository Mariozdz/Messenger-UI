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
          "flex flex-row w-full items-center py-5 px-4 bg-purple-600 shadow-lg border border-purple-500",
          className
        )
      )}
    >
      <div className="w-16">
        <div className="rounded-full w-12 h-12 bg-black">
          <Image src={image} className="rounded-full" alt="_#" />
        </div>
      </div>
      {title && <div className="text-white">{title}</div>}
    </div>
  );
}
