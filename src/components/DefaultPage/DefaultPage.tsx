import Starfield from '../../components/Starfield/Starfield';
import { useTheme } from '../../theme/ThemeProvider';
import type { DefaultPageProps } from '../../types';

function DefaultPage({
  className = 'flex',
  childrenClassName = 'h-full w-full flex flex-col flex-1 gap-y-8',
  children = null,
  HtmlTag = 'div',
  starfield = true,
}: DefaultPageProps) {
  const { theme } = useTheme();

  return (
    <HtmlTag className={className}>
      {starfield && theme === 'dark' && <Starfield />}
      {children && <div className={childrenClassName}>{children}</div>}
    </HtmlTag>
  );
}

export default DefaultPage;
