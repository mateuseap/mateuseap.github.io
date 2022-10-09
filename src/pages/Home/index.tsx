import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  MenuItems,
  BurgerMenu,
  MainText,
  SecondaryText,
} from './styles';
import fox from '../../assets/fox.png';
import { Links } from '../../types/enums';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Background>
      <TopNavigation>
        <Rectangle1>😀</Rectangle1>
        <HeaderTitle> mateuseap </HeaderTitle>
        <BurgerMenu
          className={isOpen ? 'openBurger' : ''}
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </BurgerMenu>
        <MenuItems className={isOpen ? 'openNav' : ''}>
          <NavLink to={Links.HOME}>Home</NavLink>
          <NavLink to={Links.ABOUT}>Sobre mim</NavLink>
          <NavLink to={Links.PROJECTS}>Projetos</NavLink>
        </MenuItems>
      </TopNavigation>
      <MainText>
        Meu nome é Mateus Elias, seja bem vindo ao meu website pessoal.
      </MainText>
      <SecondaryText>
        Ainda estamos em fase de construção, em breve o website estará recheado
        😎
      </SecondaryText>
      <img
        src={fox}
        alt='Fox 🦊'
        style={{
          position: 'absolute',
          width: '45vw',
          height: '90vh',
          left: '50vw',
          top: '10vh',
        }}
      />
    </Background>
  );
}

export default Home;
