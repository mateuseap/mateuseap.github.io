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

  // Stars are near-white on the dark background and a soft teal on light, so the
  // effect reads on both themes without washing out the foreground text.
  const starColor = theme === 'dark' ? '#8fa39c' : '#0f7a63';

  return (
    <HtmlTag className={className}>
      {starfield && <Starfield key={theme} color={starColor} />}
      {children && <div className={childrenClassName}>{children}</div>}
    </HtmlTag>
  );
}

export default DefaultPage;
