import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { SUPPORTED_LANGUAGES } from '../../i18n';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const activeCode =
    SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language)?.code ??
    SUPPORTED_LANGUAGES.find(lang => i18n.language?.startsWith(lang.code))
      ?.code ??
    'en';

  const changeLanguage = (code: string) => {
    if (code !== activeCode) {
      i18n.changeLanguage(code);
    }
  };

  return (
    <div
      role='group'
      aria-label={t('header.changeLanguage')}
      className={clsx(
        'flex h-9 items-center gap-0.5 rounded-lg border p-0.5',
        'border-line bg-white/60',
        'dark:border-line-dark dark:bg-white/5',
      )}
    >
      {SUPPORTED_LANGUAGES.map(lang => {
        const isActive = lang.code === activeCode;
        return (
          <button
            key={lang.code}
            type='button'
            onClick={() => changeLanguage(lang.code)}
            aria-pressed={isActive}
            title={lang.label}
            className={clsx(
              'flex h-full items-center rounded-md px-2 font-mono text-xs font-semibold',
              'transition-colors duration-200 ease-out',
              isActive
                ? 'bg-accent text-white dark:bg-accent-dark dark:text-base-dark'
                : 'text-muted hover:text-accent dark:text-muted-dark dark:hover:text-accent-dark',
            )}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
