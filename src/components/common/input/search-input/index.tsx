import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex flex-row items-center p-4 w-full rounded-3xl border border-gray-200 shadow-md">
      <FontAwesomeIcon icon={faSearch} className="mr-3 text-lg" width={36} />

      <input
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder="Search"
        className="flex flex-1 style-none outline-0"
      />
    </div>
  );
}
