import type { ProfileInfo } from '@/types';
import { useLocation } from 'react-router-dom';
import { ProfileContent, ProfileNotSelected } from './components';

export const ProfilePage = () => {
  const location = useLocation();
  const state = location.state as { profile?: ProfileInfo };

  if (!state?.profile) {
    return <ProfileNotSelected />;
  }

  return <ProfileContent profile={state.profile} />;
};
