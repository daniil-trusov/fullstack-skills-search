import { useNavigate } from 'react-router-dom';

import { useKeyboardNavigation } from '@/hooks';
import type { ProfileInfo } from '@/types';
import { ProfileCard } from './ProfileCard';

type Props = {
  profiles: ProfileInfo[];
};

export const ProfileGrid: React.FC<Props> = ({ profiles }) => {
  const navigate = useNavigate();

  const selectCard = (profile: ProfileInfo) => {
    navigate(`/profile/${profile.id}`, { state: { profile } });
  };

  const { itemRefs, handleKeyDown } = useKeyboardNavigation(profiles, selectCard);

  return (
    <div
      role="list"
      className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-x-4 gap-y-6 w-full"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {profiles.map((profile, index) => (
        <div
          key={`${profile.name}-${index}`}
          role="listitem"
          tabIndex={-1}
          ref={(el: HTMLDivElement | null) => {
            itemRefs.current[index] = el;
          }}
          className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
          onClick={() => selectCard(profile)}
        >
          <ProfileCard profile={profile} />
        </div>
      ))}
    </div>
  );
};
