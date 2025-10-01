import { searchProfiles as apiSearchProfiles } from '@/api/profileApi';
import type { SearchResult } from '@/types';
import { useState } from 'react';

export const useSearchProfiles = () => {
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchProfiles = async (skills: string[]) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiSearchProfiles(skills);
      setResults(data);
    } catch (err: any) {
      setError(err?.message || 'Error searching profiles');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchProfiles };
};
