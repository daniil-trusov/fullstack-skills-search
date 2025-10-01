import type { ProfileInfo } from '@/types';
import clsx from 'clsx';

import { SkillsList } from '@/components/shared/SkillsList';
import { Stars } from '@/components/shared/Stars';

type Props = {
  profile: ProfileInfo;
};

export const ProfileCard: React.FC<Props> = ({ profile }) => {
  const { name, age, avatar, city, skills, bio, rating } = profile;

  return (
    <article
      tabIndex={0}
      role="article"
      aria-label={`Profile of ${name}, ${age} years old from ${city}, rating ${rating} out of 5`}
      className={clsx(
        'w-70 bg-white shadow-md border border-gray-300 p-4 rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
        'transition-transform duration-200 ease-in-out hover:scale-105',
      )}
    >
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p className="text-gray-800 text-sm">
              {age}, {city}
            </p>
          </div>
        </div>

        <SkillsList skills={skills} aria-label={`${name}'s skills`} />

        <div className="text-gray-800 text-sm">{bio}</div>

        <Stars value={rating} showValue={true} />
      </div>
    </article>
  );
};
