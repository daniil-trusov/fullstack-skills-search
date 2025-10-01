import clsx from 'clsx';

import { Chip } from '@/components/shared';

type SuggestionListProps = {
  filtered: string[];
  focusedIndex: number;
  onSelect: (skill: string) => void;
};

export const SuggestionList: React.FC<SuggestionListProps> = ({
  filtered,
  focusedIndex,
  onSelect,
}) => (
  <div
    id="autocomplete-list"
    role="listbox"
    className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto p-2"
  >
    {filtered.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {filtered.map((skill, index) => (
          <div
            key={skill}
            role="option"
            id={`skill-${index}`}
            aria-selected={focusedIndex === index}
            tabIndex={0}
            onClick={() => onSelect(skill)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onSelect(skill);
              }
            }}
          >
            <Chip className={clsx({ 'ring-2 ring-blue-400': focusedIndex === index })}>
              {skill}
            </Chip>
          </div>
        ))}
      </div>
    ) : (
      <span className="text-blue-500">No suggestions</span>
    )}
  </div>
);
