import clsx from 'clsx';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import Link from '../../components/Link/Link';
import type { ProjectCardProps } from '../../types';

function ProjectCard({
  name,
  description,
  githubRepoUrl = undefined,
  deployedAppUrl = undefined,
  technologiesUsed,
  thumbnail,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        'relative rounded-lg border p-4',
        'border-line bg-black/[0.02]',
        'dark:border-line-dark dark:bg-white/5',
        'transition-all duration-500 ease-out',
        'hover:border-accent/60 dark:hover:border-accent-dark/60 dark:hover:bg-white/10',
      )}
    >
      <div className='flex flex-col space-y-3'>
        {deployedAppUrl ? (
          <Link
            to={deployedAppUrl}
            external
            rightIcon={<FiExternalLink size={22} />}
            size='lg'
            className='w-fit font-semibold'
          >
            <img
              src={thumbnail}
              alt={`${name} logo`}
              width='32'
              height='32'
              className='rounded-md'
            />
            <span>{name}</span>
          </Link>
        ) : (
          <p className='group flex w-fit items-center gap-2 text-lg font-semibold'>
            <img
              src={thumbnail}
              alt={`${name} logo`}
              width='32'
              height='32'
              className='rounded-md'
            />
            <span>{name}</span>
          </p>
        )}
        <p className='text-base text-ink dark:text-ink-dark'>{description}</p>

        <div className='flex flex-wrap items-center'>
          {technologiesUsed.map(technology => (
            <span
              key={technology}
              className={clsx(
                'mr-2 mt-2 inline-block rounded-md border px-2 py-1 font-mono text-xs font-semibold',
                'border-line text-muted',
                'dark:border-line-dark dark:text-muted-dark',
              )}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
      {githubRepoUrl && (
        <a
          href={githubRepoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={clsx(
            'group',
            'absolute top-4 right-4 rounded-lg px-2 py-1',
            'text-muted dark:text-muted-dark',
          )}
          aria-label={`${name} on GitHub`}
        >
          <AiFillGithub
            size={28}
            className={clsx(
              'fill-current',
              'transition-all duration-300 ease-out',
              'group-hover:scale-[1.2] group-hover:text-accent dark:group-hover:text-accent-dark',
            )}
          />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
