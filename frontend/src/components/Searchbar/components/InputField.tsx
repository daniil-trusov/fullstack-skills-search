type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaActivedescendant?: string;
};

export const InputField: React.FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  ariaActivedescendant,
}) => (
  <input
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    aria-autocomplete="list"
    aria-controls="autocomplete-list"
    aria-activedescendant={ariaActivedescendant}
    className="border border-gray-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);
