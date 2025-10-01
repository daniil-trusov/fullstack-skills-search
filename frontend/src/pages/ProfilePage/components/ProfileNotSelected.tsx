import { LinkButton } from '@/components/shared';

export const ProfileNotSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-[60vh]">
      <h2 className="text-4xl font-bold text-center ">No profile selected</h2>

      <LinkButton variant="cta" to="/search">
        Go to Search
      </LinkButton>
    </div>
  );
};
