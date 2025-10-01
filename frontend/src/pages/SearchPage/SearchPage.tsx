import { Searchbar } from '@/components/Searchbar';
import { useSearchProfiles } from '@/hooks';
import { PageContent } from './components';

export const SearchPage = () => {
  const { results, loading, error, searchProfiles } = useSearchProfiles();

  const handleSearch = (skills: string[]) => {
    searchProfiles(skills);
  };

  return (
    <div className="mx-auto py-12 flex flex-col items-center gap-8 w-full">
      <h2 className="text-4xl font-bold text-center">Search profiles</h2>

      <div className="w-full max-w-sm">
        <Searchbar onSearch={handleSearch} />
      </div>

      <div className="w-full flex justify-center min-h-[200px]">
        <PageContent loading={loading} error={error} results={results} />
      </div>
    </div>
  );
};
