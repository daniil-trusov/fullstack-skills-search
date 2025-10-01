import { useState } from 'react';

import { SKILLS } from '@/constants';

import { InputWithAutoComplete } from './components';
import { SelectedSkillsList } from './components/SelectedSkillsList';

type Props = {
  onSearch: (skills: string[]) => void;
};

export const Searchbar: React.FC<Props> = ({ onSearch }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addSkill = (skill: string) => {
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills((prev) => [...prev, skill]);
      setInputValue('');
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const clearAll = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 w-full">
        <div className="flex-grow">
          <InputWithAutoComplete
            value={inputValue}
            onChange={setInputValue}
            suggestions={SKILLS}
            onSelect={addSkill}
            placeholder="Type a skill..."
          />
        </div>

        <button
          onClick={() => onSearch(selectedSkills)}
          className="bg-blue-500 rounded-md py-2 px-4 text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap"
        >
          Search
        </button>
      </div>

      <div className="min-h-7">
        <SelectedSkillsList
          selectedSkills={selectedSkills}
          removeSkill={removeSkill}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
};
