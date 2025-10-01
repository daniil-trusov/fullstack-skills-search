import { Chip } from '@/components/shared';
import { SKILLS } from '@/constants';

export const SkillCloud = () => {
  const cloudSize = { width: 320, height: 200 };

  return (
    <div className="relative w-full h-[200px]">
      {SKILLS.map((skill, i) => {
        const x = Math.random() * (cloudSize.width - 80);
        const y = Math.random() * (cloudSize.height - 30);
        const scale = 0.8 + Math.random() * 0.5;

        return (
          <div
            key={skill}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: `scale(${scale}) rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            <Chip>{skill}</Chip>
          </div>
        );
      })}
    </div>
  );
};
