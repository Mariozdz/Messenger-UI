import { ReactElement } from "react";

type MessageContainerProps = {
  isMine?: boolean;
  message: string;
  children?: ReactElement;
};

export function MessageContainer({
  isMine = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  message,
  children,
}: MessageContainerProps) {
  if (isMine) {
    return (
      <div className="flex items-end justify-end px-4 py-2 w-full mt-6">
        {children}
      </div>
    );
  }

  return (
    <div className="flex items-start px-4 py-2 w-full mt-6">{children}</div>
  );
}
