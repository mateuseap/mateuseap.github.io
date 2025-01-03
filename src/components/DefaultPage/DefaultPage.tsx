import Starfield from '../../components/Starfield/Starfield';
import type { DefaultPageProps } from '../../types';

function DefaultPage({
  className = 'flex',
  childrenClassName = 'h-full w-full flex flex-col flex-1 gap-y-8',
  children = null,
  HtmlTag = 'div',
  starfield = true,
}: DefaultPageProps) {
  return (
    <HtmlTag className={className}>
      {starfield && <Starfield />}
      {children && <div className={childrenClassName}>{children}</div>}
    </HtmlTag>
  );
}

export default DefaultPage;
