import { Chip } from './Chip';

type Props = {
  skills: string[];
};

export const SkillsList: React.FC<Props> = ({ skills }) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {skills.map((skill, index) => (
        <li key={`${skill}-${index}`}>
          <Chip>{skill}</Chip>
        </li>
      ))}
    </ul>
  );
};
