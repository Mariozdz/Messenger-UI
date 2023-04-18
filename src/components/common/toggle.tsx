import { useState } from "react";

interface ToogleProps {
  onChangeValue: (value: boolean) => void;
  initalValue?: boolean;
}

/**
 * @param onChangeValue callBack to get the current value for the toggle, usually initialized in false
 */

export default function Toggle({
  onChangeValue,
  initalValue = false,
}: ToogleProps) {
  const [toggle, setToggle] = useState(initalValue);

  return (
    <div
      className={
        "relative md:w-120 md:h-24 w-12 h-6 -translate-x-0 flex items-center bg-gray-600 rounded-xl cursor-pointer"
      }
      onClick={() => {
        setToggle(!toggle);
        onChangeValue(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "flex z-30 items-center justify-center text-lg font-semibold bg-white md:w-1/2 md:h-full h-5 w-5 rounded-xl shadow-md transform  duration-300 ease-in-out" +
          (toggle ? null : "transform translate-x-60")
        }
      >
        {toggle ? "Login" : "SignUp"}
      </div>

      <div className="flex items-center justify-center absolute w-1/2 text-lg font font-semibold text-white">
        Login
      </div>
      <div className="flex items-center justify-center absolute w-1/2 left-1/2 text-lg font font-semibold text-white">
        SignUp
      </div>
    </div>
  );
}
