import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';
import clsx from 'clsx';
import { SUPPORTED_LANGUAGES } from '../../i18n';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCode =
    SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language)?.code ??
    SUPPORTED_LANGUAGES.find(lang => i18n.language?.startsWith(lang.code))
      ?.code ??
    'en';
  const active = SUPPORTED_LANGUAGES.find(lang => lang.code === activeCode);

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className='relative'>
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        aria-label={t('header.changeLanguage')}
        aria-haspopup='menu'
        aria-expanded={open}
        className={clsx(
          'flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-sm font-medium',
          'border-line bg-white/60 text-ink',
          'dark:border-line-dark dark:bg-white/5 dark:text-ink-dark',
          'transition-all duration-300 ease-out',
          'hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark',
        )}
      >
        <FiGlobe size={16} />
        <span className='font-mono'>{active?.short}</span>
      </button>

      {open && (
        <ul
          role='menu'
          className={clsx(
            'absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border py-1 shadow-lg',
            'border-line bg-white text-ink',
            'dark:border-line-dark dark:bg-surface-dark dark:text-ink-dark',
          )}
        >
          {SUPPORTED_LANGUAGES.map(lang => {
            const isActive = lang.code === activeCode;
            return (
              <li key={lang.code} role='none'>
                <button
                  type='button'
                  role='menuitemradio'
                  aria-checked={isActive}
                  onClick={() => changeLanguage(lang.code)}
                  className={clsx(
                    'flex w-full items-center justify-between px-3 py-2 text-left text-sm',
                    'transition-colors duration-200',
                    'hover:bg-black/5 dark:hover:bg-white/10',
                    isActive &&
                      'font-semibold text-accent dark:text-accent-dark',
                  )}
                >
                  <span>{lang.label}</span>
                  <span className='font-mono text-xs opacity-70'>
                    {lang.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
