import { SkillsList, Stars } from '@/components/shared';
import type { ProfileInfo } from '@/types';

type Props = {
  profile: ProfileInfo;
};

export const ProfileContent: React.FC<Props> = ({ profile }) => {
  const { name, age, avatar, city, skills, bio, rating } = profile;

  return (
    <div className="max-w-lg w-full mx-auto py-12 px-6 mt-8 bg-white shadow-md border border-gray-200 rounded-lg flex flex-col items-center gap-6">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-40 h-40 rounded-lg object-cover shadow-md"
      />

      <div className="text-center flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

        <p className="text-gray-600 text-lg">
          {age}, {city}
        </p>
      </div>

      <div className="w-full flex justify-center">
        <SkillsList skills={skills} aria-label={`${name}'s skills`} />
      </div>

      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-2">About</h2>

        <p className="text-gray-700">{bio}</p>
      </div>

      <div className="w-full ">
        <Stars value={rating} showValue={true} />
      </div>
    </div>
  );
};
