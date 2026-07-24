import { useTranslation } from 'react-i18next';
import { FiMoon, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import { useTheme } from '../../theme/ThemeProvider';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={t(isDark ? 'header.toggleThemeToLight' : 'header.toggleThemeToDark')}
      title={t(isDark ? 'header.toggleThemeToLight' : 'header.toggleThemeToDark')}
      className={clsx(
        'flex h-9 w-9 items-center justify-center rounded-lg border',
        'border-line bg-white/60 text-ink',
        'dark:border-line-dark dark:bg-white/5 dark:text-ink-dark',
        'transition-all duration-300 ease-out',
        'hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark',
      )}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default ThemeToggle;
