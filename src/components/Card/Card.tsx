import GithubLogo from '../../assets/github-logo.svg';
import { Tooltip } from 'flowbite-react';

export interface CardProps {
  title: string;
  image: string;
  description: string;
  repoUrl?: string;
  button?: boolean;
  buttonContent?: string;
  buttonRedirectUrl?: string;
  buttonOnClick?: () => void;
  height?: string;
  width?: string;
}

function Card({
  title,
  image,
  description,
  repoUrl,
  button,
  buttonContent,
  buttonRedirectUrl,
  buttonOnClick,
  height = '32',
  width = 'full',
}: CardProps) {
  return (
    <div
      className={`whitespace-nowrap h-${height} w-${width} flex flex-col gap-y-4 pb-4 pt-4 justify-center items-center text-black bg-[#dedede] rounded-2xl`}
    >
      {repoUrl ? (
        <div className='w-full flex pr-4 pl-2 font-bold text-xl text-black'>
          <div className='flex flex-1 pl-14 justify-center items-center'>
            {title}
          </div>
          <Tooltip style='light' content={'Repositório'} placement='right'>
            <a
              key={'GitHub Logo'}
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='h-10 w-10 float-right hover:bg-white hover:rounded-xl hover:shadow-md'
                src={GithubLogo}
                draggable='false'
              />
            </a>
          </Tooltip>
        </div>
      ) : (
        <div className='w-full flex justify-center items-center font-bold text-xl text-black'>
          {title}
        </div>
      )}
      <img className={`h-auto w-[40vw]`} src={image} />
      <div className='pr-4 pl-4 font-medium text-base hover:text-white hover:bg-[#121212]'>
        {description}
      </div>
      {button && (
        <button
          className='pr-4 pl-4 text-white bg-[#121212] rounded-lg'
          onClick={buttonOnClick}
        >
          {buttonRedirectUrl ? (
            <a
              key={buttonContent}
              href={buttonRedirectUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {buttonContent}
            </a>
          ) : (
            <>{buttonContent}</>
          )}
        </button>
      )}
    </div>
  );
}

export default Card;
