import clsx from 'clsx';
import { type IconType } from 'react-icons';

export interface TechnologyCardProps {
    name: string;
    Icon?: IconType | undefined;
}

function TechnologyCard({ name, Icon = undefined }: TechnologyCardProps) {
  return (
    <div
      className={clsx(
        'h-22 flex flex-col items-center justify-center space-y-2 font-semibold',
        'rounded-lg border-[1px] border-none bg-white/5 p-4 text-sm',
        'rounded-md shadow-md',
        'hover:shadow-[#b0b0b0] active:translate-y-[2px]',
        'transition-all duration-300 ease-out',
      )}
    >
      {Icon && <Icon size={24} />}
      <span className='whitespace-nowrap'>{name}</span>
    </div>
  );
};

export default TechnologyCard;