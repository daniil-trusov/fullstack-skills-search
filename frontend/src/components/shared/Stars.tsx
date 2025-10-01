import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

type Props = {
  value: number;
  showValue?: boolean;
};

export const Stars: React.FC<Props> = ({ value, showValue = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          const starValue = i + 1;

          if (value >= starValue) {
            return <FaStar key={i} className="text-yellow-400" />;
          } else if (value >= starValue - 0.5) {
            return <FaStarHalfAlt key={i} className="text-yellow-400" />;
          } else {
            return <FaRegStar key={i} className="text-yellow-400" />;
          }
        })}
      </div>

      {showValue && <span className="text-yellow-400 font-bold">{value}</span>}
    </div>
  );
};
