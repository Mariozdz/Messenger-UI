import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabButton } from "src/components/common/button/tab-buttons";
import { SearchInput } from "src/components/common/input/search-input";

type ChatListHeaderProps = {
  searchValue: string;

  onChangeSearchValue: (value: string) => void;
};

export function ChatListHeader({
  searchValue,
  onChangeSearchValue,
}: ChatListHeaderProps) {
  return (
    <>
      <div className="flex flex-col px-4 my-8 ">
        <div className="flex flex-row items-center justify-between mb-8">
          <div className="text-4xl font-bold text-purple-800">Chats</div>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-purple-500 cursor-pointer"
            onClick={() => alert("chili se la come")}
            size="2xl"
            width={36}
          />
        </div>
        <div className="flex flex-row space-x-6 w-full">
          <TabButton label="Direct" />
          <TabButton label="Groups" />
          <TabButton label="Public" />
        </div>
      </div>

      <div className="mb-12 px-4">
        <SearchInput value={searchValue} onChange={onChangeSearchValue} />
      </div>
    </>
  );
}
