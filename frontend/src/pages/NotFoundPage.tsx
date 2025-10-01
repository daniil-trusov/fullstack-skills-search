import { LinkButton } from '@/components/shared';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-[60vh]">
      <h2 className="text-4xl font-bold text-center ">404 - Page Not Found</h2>

      <LinkButton variant="cta" to="/home">
        Go to Home
      </LinkButton>
    </div>
  );
};
