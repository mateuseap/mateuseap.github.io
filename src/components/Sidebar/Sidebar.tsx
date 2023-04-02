import {
  HomeIcon,
  UserCircleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import SidebarItem, { SidebarItemProps } from '../SidebarItem/SidebarItem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScoraJourneyLogoPoints from '../../assets/profile-pic.jpg';

function Sidebar() {
  const actualPath = useLocation().pathname;
  const selectedItemValue: { [key: string]: number } = {
    '/': 1,
    '/sobre-mim': 2,
    '/projetos': 3,
  };
  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    setSelectedItem(selectedItemValue[actualPath]);
    // eslint-disable-next-line
  }, [actualPath]);

  const sidebarTopItems: Array<SidebarItemProps> = [
    {
      itemId: 1,
      link: '/',
      tooltipText: 'Home',
      defaultIcon: <HomeIcon className='h-6 w-6' />,
      selectedIcon: <HomeIcon className='h-6 w-6 stroke-black' />,
    },
    {
      itemId: 2,
      link: '/sobre-mim',
      tooltipText: 'Sobre mim',
      defaultIcon: <UserCircleIcon className='h-6 w-6' />,
      selectedIcon: <UserCircleIcon className='h-6 w-6 stroke-black' />,
    },
    {
      itemId: 3,
      link: '/projetos',
      tooltipText: 'Projetos',
      defaultIcon: <Squares2X2Icon className='h-6 w-6' />,
      selectedIcon: <Squares2X2Icon className='h-6 w-6 stroke-black' />,
    },
  ];

  return (
    <aside className='h-screen sticky top-0 w-32 pt-8 flex flex-col items-center z-20'>
      <div className='h-16 w-16 pr-0.5 flex items-center justify-center bg-[#dedede] rounded-full'>
        <img
          src={ScoraJourneyLogoPoints}
          alt='Mateus Elias'
          className='h-12 w-12 rounded-full'
          draggable='false'
        />
      </div>
      <div className='pt-12 flex flex-col gap-y-7'>
        {sidebarTopItems.map(sidebarItem => {
          return (
            <SidebarItem
              key={sidebarItem.itemId}
              itemId={sidebarItem.itemId}
              link={sidebarItem.link}
              selectedIcon={sidebarItem.selectedIcon}
              defaultIcon={sidebarItem.defaultIcon}
              tooltipText={sidebarItem.tooltipText}
              selectedItem={selectedItem}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
