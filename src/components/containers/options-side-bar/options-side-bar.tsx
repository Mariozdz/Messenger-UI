import {
  faUsers,
  faPhone,
  faMessage,
  faUserGear,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export function OptionsSideBar() {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between w-40 min-w-32 pt-5 items-center bg-back bg-opacity-80"
      )}
    >
      <div className="text-white text-5xl font-semibold">P.</div>
      <div className="flex flex-col space-y-16">
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-white"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={40}
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-white"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={40}
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faMessage}
            className="text-white"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={40}
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faUserGear}
            className="text-white"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={40}
          />
        </div>
      </div>
      <div className="text-white text-5xl font-semibold">
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faSun}
            className="text-white"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={40}
          />
        </div>
      </div>
    </div>
  );
}
