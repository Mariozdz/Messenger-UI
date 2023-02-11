import clsx from "clsx";

type MessageProps = {
  message: string;
  isMine: boolean;
};

export function Message({ message, isMine }: MessageProps) {
  return (
    <div
      className={clsx(
        "h-full max-w-1/3 py-3 px-6 bg-message text-white rounded-b-2xl",
        isMine ? "rounded-tl-2xl" : "rounded-tr-2xl"
      )}
    >
      {message}
    </div>
  );
}
