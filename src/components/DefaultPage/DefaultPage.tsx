import { ReactNode } from 'react';
import Starfield from '../../components/Starfield/Starfield';

export interface DefaultPageProps {
  className?: string;
  childrenClassName?: string;
  children?: ReactNode;
  HtmlTag?: keyof JSX.IntrinsicElements;
  starfield?: boolean;
}

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
