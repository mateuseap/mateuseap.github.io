import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { BiMailSend, BiSolidFileArchive } from 'react-icons/bi';
import { CONTACT_EMAIL, CV_URL } from '../../constants';

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
    'flex w-full items-center justify-center gap-2 rounded-md px-3 py-2.5 font-semibold leading-none',
    'border border-line bg-accent/10 text-ink',
    'dark:border-line-dark dark:bg-white/5 dark:text-ink-dark',
    'shadow-sm transition-all duration-300 ease-out',
    'hover:scale-[1.03] hover:text-accent dark:hover:text-accent-dark',
  );

  const connectLinkClass = clsx(
    'text-ink hover:text-accent',
    'dark:text-ink-dark dark:hover:text-accent-dark',
    'transition-colors duration-300 ease-out hover:underline',
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
            <a
              key={item.name}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className={connectLinkClass}
            >
              {item.name}
            </a>
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
