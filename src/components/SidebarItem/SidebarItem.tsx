import { Tooltip } from 'flowbite-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export interface SidebarItemProps {
  itemId: number;
  link: string;
  defaultIcon: JSX.Element;
  selectedIcon: JSX.Element;
  selectedItem?: number;
  tooltipText: string;
  onClick?: (itemId: number) => void;
}

function SidebarItem({
  itemId,
  link,
  defaultIcon,
  selectedIcon,
  selectedItem,
  tooltipText,
  onClick,
}: SidebarItemProps) {
  const memorizedSelectedItem = useMemo(() => selectedItem, [selectedItem]);

  const handleClick = () => {
    if (onClick) {
      onClick(itemId);
    }
  };

  return (
    // eslint-disable-next-line
    <Tooltip style='light' content={tooltipText} placement='right'>
      <Link
        className={`h-12 w-12 flex justify-center items-center hover:rounded-xl hover:shadow-md ${
          memorizedSelectedItem === itemId
            ? 'bg-white rounded-xl shadow-md'
            : 'bg-transparent'
        }`}
        to={link}
        replace
        onClick={handleClick}
      >
        {memorizedSelectedItem === itemId ? selectedIcon : defaultIcon}
      </Link>
    </Tooltip>
  );
}

export default SidebarItem;
