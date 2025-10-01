import { LinkButton } from '@/components/shared';
import { SkillCloud } from '@/components/SkillCloud';

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-0 sm:flex-row justify-between mt-16 sm:px-8">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-left">
          Welcome to <br />
          the Platform
        </h1>

        <div>
          <LinkButton variant="cta" to="/search" className="bg-blue-600">
            Go to Search
          </LinkButton>
        </div>
      </div>

      <div className="flex-1 flex-wrap justify-center gap-4">
        <SkillCloud />
      </div>
    </div>
  );
};
