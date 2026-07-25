import clsx from 'clsx';
import type { TechnologyCardProps } from '../../types';

function TechnologyCard({ name, Icon = undefined }: TechnologyCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center space-y-2 font-semibold',
        'min-h-[88px] rounded-md border p-4 text-sm shadow-sm',
        'border-line bg-black/[0.02] text-ink',
        'dark:border-line-dark dark:bg-white/5 dark:text-ink-dark',
        'hover:border-accent/60 hover:text-accent active:translate-y-[2px]',
        'dark:hover:border-accent-dark/60 dark:hover:text-accent-dark',
        'transition-all duration-300 ease-out',
      )}
    >
      {Icon && <Icon size={24} className='shrink-0' />}
      <span className='min-w-0 text-center leading-tight'>{name}</span>
    </div>
  );
}

export default TechnologyCard;
