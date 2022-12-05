type MessageProps = {
  message: string;
};

export function Message({ message }: MessageProps) {
  return (
    <div className=" h-full max-w-1/3 rounded-3xl py-3 px-6 bg-purple-500 text-white">
      {message}
    </div>
  );
}
