import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import clsx from 'clsx';
import { SOCIAL_MEDIAS, BLOG_URL } from '../../constants';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 w-full border-b backdrop-blur-md',
        'border-line/70 bg-ground/80',
        'dark:border-line-dark/70 dark:bg-base-dark/80',
      )}
    >
      <div className='mx-auto flex max-w-[720px] items-center justify-between gap-x-3 px-4 py-3'>
        <a
          href='#top'
          className='flex items-center gap-x-2 font-semibold'
          aria-label='mateuseap'
        >
          <Logo size={32} />
          <span className='hidden font-mono text-sm tracking-tight sm:inline'>
            mateuseap
          </span>
        </a>

        <nav className='flex items-center gap-x-1.5 sm:gap-x-2'>
          <div className='hidden items-center gap-x-1 sm:flex'>
            {SOCIAL_MEDIAS.map(({ url, Icon, label }) => (
              <a
                key={url}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className={clsx(
                  'flex h-9 w-9 items-center justify-center rounded-lg text-ink dark:text-ink-dark',
                  'transition-all duration-300 ease-out',
                  'hover:text-accent dark:hover:text-accent-dark',
                )}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <a
            href={BLOG_URL}
            target='_blank'
            rel='noopener noreferrer'
            className={clsx(
              'flex h-9 items-center gap-x-1 rounded-lg px-2.5 text-sm font-medium',
              'text-ink dark:text-ink-dark',
              'transition-all duration-300 ease-out',
              'hover:text-accent dark:hover:text-accent-dark',
            )}
          >
            {t('header.blog')}
            <FiExternalLink size={14} />
          </a>

          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
