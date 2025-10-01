import { Chip } from '@/components/shared';

type Props = {
  selectedSkills: string[];
  removeSkill: (skill: string) => void;
  clearAll: () => void;
};

export const SelectedSkillsList: React.FC<Props> = ({ selectedSkills, removeSkill, clearAll }) => {
  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="Selected skills">
      {selectedSkills.map((skill) => (
        <div key={skill} role="listitem" tabIndex={-1}>
          <Chip onClick={() => removeSkill(skill)} className="hover:ring-2 hover:ring-blue-400">
            {skill}
          </Chip>
        </div>
      ))}

      {selectedSkills.length > 1 && (
        <div key="CLEAR_ALL" role="listitem" tabIndex={-1}>
          <Chip
            onClick={clearAll}
            className="bg-red-300 text-red-700 hover:ring-2 hover:ring-red-400"
          >
            Clear All
          </Chip>
        </div>
      )}
    </div>
  );
};
