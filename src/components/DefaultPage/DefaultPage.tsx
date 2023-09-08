import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Starfield from '../../components/Starfield/Starfield';

export interface DefaultPageProps {
  className?: string;
  childrenClassName?: string;
  children?: ReactNode;
  HtmlTag?: keyof JSX.IntrinsicElements;
  sidebar?: boolean;
  starfield?: boolean;
}

function DefaultPage({
  className = 'flex',
  childrenClassName = 'h-full w-full flex flex-col flex-1 gap-y-8',
  children = null,
  HtmlTag = 'div',
  sidebar = true,
  starfield = true,
}: DefaultPageProps) {
  return (
    <HtmlTag className={className}>
      {starfield && <Starfield />}
      {sidebar && <Sidebar />}
      {children && <div className={childrenClassName}>{children}</div>}
    </HtmlTag>
  );
}

export default DefaultPage;
