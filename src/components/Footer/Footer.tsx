import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { BiMailSend, BiSolidFileArchive } from 'react-icons/bi';
import { CONTACT_EMAIL, CV_URL } from '../../constants';
import Link from '../Link/Link';

function Footer() {
  const { t } = useTranslation();

  const connectItems = [
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

  const actionButtonClass = clsx(
    'flex w-full items-center gap-2 rounded-md p-2 font-semibold',
    'border border-line bg-accent/10 text-ink',
    'dark:border-line-dark dark:bg-white/5 dark:text-ink-dark',
    'shadow-sm transition-all duration-300 ease-out',
    'hover:scale-[1.03] hover:text-accent dark:hover:text-accent-dark',
  );

  return (
    <footer className='w-full mb-10 text-ink dark:text-ink-dark'>
      <div className='my-5 border-t border-line dark:border-line-dark' />
      <div className='grid w-full grid-cols-1 items-start gap-8 px-4 py-5 sm:grid-cols-3'>
        <div className='flex flex-col items-start gap-3'>
          <h3 className='text-sm font-semibold text-muted dark:text-muted-dark'>
            {t('footer.connect')}
          </h3>
          {connectItems.map(item => (
            <Link key={item.name} to={item.url} variant='link' external>
              {item.name}
            </Link>
          ))}
        </div>

        <div className='flex flex-col items-start gap-3'>
          <h3 className='text-sm font-semibold text-muted dark:text-muted-dark'>
            {t('footer.getInTouch')}
          </h3>
          <span className='font-mono text-sm'>+55 (81) 98438-8381</span>
        </div>

        <div className='flex w-full flex-col items-start gap-3'>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={actionButtonClass}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiMailSend size={20} />
            {t('footer.contact')}
          </a>
          <a
            href={CV_URL}
            className={actionButtonClass}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiSolidFileArchive size={20} />
            {t('footer.cv')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
