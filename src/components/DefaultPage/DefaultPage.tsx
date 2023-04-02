import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const DefaultPage = ({
  className = 'flex',
  childrenClassName = 'h-full w-full flex flex-col flex-1 gap-y-8 pr-6',
  children = null,
  HtmlTag = 'div',
  sidebar = true,
}: {
  className?: string;
  childrenClassName?: string;
  children?: ReactNode;
  HtmlTag?: keyof JSX.IntrinsicElements;
  sidebar?: boolean;
}) => {
  return (
    <HtmlTag className={className}>
      {sidebar && <Sidebar />}
      {children && <div className={childrenClassName}>{children}</div>}
    </HtmlTag>
  );
};

export default DefaultPage;
