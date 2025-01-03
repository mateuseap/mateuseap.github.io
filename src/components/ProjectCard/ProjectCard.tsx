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
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'hover:bg-white/10',
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
        <p className='text-base'>{description}</p>

        <div className='flex flex-wrap items-center'>
          {technologiesUsed.map(technology => (
            <span
              key={technology}
              className='mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold'
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
          )}
        >
          <AiFillGithub
            size={28}
            color='#ffe4e64d'
            className={clsx(
              'fill-rose-100/30',
              'transition-all duration-300 ease-out',
              'group-hover:scale-[1.2] group-hover:fill-white',
            )}
          />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
