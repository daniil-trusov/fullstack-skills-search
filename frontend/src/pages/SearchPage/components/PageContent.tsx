import { ProfileGrid } from '@/components/ProfileGrid';
import type { SearchResult } from '@/types';

type Props = {
  loading: boolean;
  error: string | null;
  results: SearchResult[] | null;
};

export const PageContent: React.FC<Props> = ({ loading, error, results }) => {
  if (error) {
    return <span className="text-red-500">Error: {error}</span>;
  }

  if (loading) {
    return <span className="text-blue-500">Loading...</span>;
  }

  if (results) {
    return results.length > 0 ? (
      <ProfileGrid profiles={results} />
    ) : (
      <span className="text-blue-500">No results found</span>
    );
  }

  return null;
};
