import { useEffect, useMemo, useRef, useState } from 'react';

import { InputField } from './InputField';
import { SuggestionList } from './SuggestionList';

type Props = {
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  onSelect: (skill: string) => void;
  placeholder?: string;
};

export const InputWithAutoComplete: React.FC<Props> = ({
  value,
  onChange,
  suggestions,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (value ? suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase())) : []),
    [value, suggestions],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (skill: string) => {
    onSelect(skill);
    onChange('');
    setIsOpen(false);
    setFocusedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filtered.length === 0) return;

    if (e.key === 'ArrowDown' || e.key == 'ArrowRight') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp' || e.key == 'ArrowLeft') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(filtered[focusedIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <InputField
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        ariaActivedescendant={isOpen && filtered.length > 0 ? `skill-${focusedIndex}` : undefined}
      />
      {isOpen && (
        <SuggestionList filtered={filtered} focusedIndex={focusedIndex} onSelect={handleSelect} />
      )}
    </div>
  );
};
