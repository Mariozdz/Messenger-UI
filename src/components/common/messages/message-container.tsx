import { ReactElement } from "react";

type MessageContainerProps = {
  isMine?: boolean;
  message: string;
  children?: ReactElement;
};

export function MessageContainer({
  isMine = false,
  message,
  children,
}: MessageContainerProps) {
  if (isMine)
    {return (
      <div className="flex items-end justify-end px-4 py-2 w-full 0">
        {children}
      </div>
    );}

  return <div className="flex items-start px-4 py-2 w-full 0">{children}</div>;
}
