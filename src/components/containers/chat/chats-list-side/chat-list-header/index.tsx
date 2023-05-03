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
    <div className="bg-back  opacity-80">
      <div className="flex flex-col px-4 py-8">
        <div className="flex flex-row space-x-6 w-full text-white">
          <TabButton label="Direct" />
          <TabButton label="Groups" />
          <TabButton label="Public" />
        </div>
      </div>

      <div className="pb-8 px-4 border-b border-gray-600">
        <SearchInput value={searchValue} onChange={onChangeSearchValue} />
      </div>
    </div>
  );
}
