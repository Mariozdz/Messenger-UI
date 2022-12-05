import { overrideTailwindClasses } from "tailwind-override";

type TabButtonProps = {
  label: string;
  onClick?: Function;
  containerClassName?: string;
};

export function TabButton({ label, onClick = () => {} }: TabButtonProps) {
  return (
    <div
      className={overrideTailwindClasses(
        "text-xl cursor-pointer hover:bg-purple-100 px-2 rounded-lg hover:text-white"
      )}
      onClick={() => onClick}
    >
      {label}
    </div>
  );
}
