import { SearchIcon} from "../../assets/Icon";
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex w-full relative items-center border border-[#334155] rounded-lg px-4 py-2">
      <SearchIcon size={16} className=" absolute left-3 top-1/2 -translate-y-1/2 text-[#B8C0D0]" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1
          bg-transparent
          text-white
          text-sm
          rounded-lg
          py-1
          placeholder:text-[#8A94A8] pl-10
        "
      />

   
    </div>
  );
}
