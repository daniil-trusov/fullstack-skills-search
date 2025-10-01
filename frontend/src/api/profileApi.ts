import type { ProfileInfo, SearchResult } from '@/types';
import { api } from './api';

export const getProfiles = async (): Promise<ProfileInfo[]> => {
  const { data } = await api.get('/profiles');
  return data;
};

export const searchProfiles = async (skills: string[]): Promise<SearchResult[]> => {
  const { data } = await api.post('/search', { skills });
  return data;
};
