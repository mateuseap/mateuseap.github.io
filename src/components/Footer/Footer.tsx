import clsx from 'clsx';
import Link from '../Link/Link';
import { BiMailSend, BiSolidFileArchive } from 'react-icons/bi';

function Footer() {
  const firstColumnItems = [
    {
      url: 'https://www.linkedin.com/in/mateuseliasdeandradepereira/',
      name: 'LinkedIn',
    },
    {
      url: 'https://github.com/mateuseap',
      name: 'GitHub',
    },
    {
      url: 'https://medium.com/@mateuselias',
      name: 'Medium',
    },
  ];

  const secondColumnItems = [
    {
      name: '+55 (81) 98438-8381',
    },
    {
      url: '',
      name: '',
    },
  ];

  return (
    <footer className='w-full mb-10'>
      <div className='my-5 border-[#909090] border-t' />
      <div className='flex flex-col flex-wrap items-center gap-10 py-5 px-4'>
        <div className='grid w-full grid-flow-col-dense grid-cols-2 items-start gap-4'>
          <div className='flex flex-col items-start gap-4'>
            {firstColumnItems.map(item => (
              <Link to={item.url} variant='link' external>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-col items-start gap-4'>
            {secondColumnItems.map(item => {
              if (item.url) {
                return (
                  <Link to={item.url} variant='link' external>
                    {item.name}
                  </Link>
                );
              }
              return <div>{item.name}</div>;
            })}
          </div>
          <div className='flex flex-col items-start gap-4'>
            <a
              href='mailto:meap@cin.ufpe.br'
              className={clsx(
                'flex items-center gap-2 rounded-md bg-rose-100/30 p-2 font-semibold w-full',
                'shadow-md transition-all duration-300 ease-out',
                'hover:scale-[1.05] hover:rounded-[10px] hover:shadow-[#b0b0b0]',
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BiMailSend size={20} />
              Contact me
            </a>
            <a
              href='https://drive.google.com/file/d/1a-OEa96xpDg5mu_JnUL2n8VsAO3yI0x6/view?usp=sharing'
              className={clsx(
                'flex items-center gap-2 rounded-md bg-rose-100/30 p-2 font-semibold w-full',
                'shadow-md transition-all duration-300 ease-out',
                'hover:scale-[1.05] hover:rounded-[10px] hover:shadow-[#b0b0b0]',
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BiSolidFileArchive size={20} />
              View my CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
