import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  HomeButton,
  AboutButton,
  ProjectsButton,
  MainText,
  SecondaryText,
} from './styles';
import fox from '../../assets/fox.png';
import { Links } from '../../types/enums';

function Home() {
  return (
    <Background>
      <TopNavigation>
        <Rectangle1>😀</Rectangle1>
        <HeaderTitle> mateuseap </HeaderTitle>
        <span style={{ whiteSpace: 'nowrap' }}>
          <HomeButton to={Links.HOME}>Home</HomeButton>
          <AboutButton to={Links.ABOUT}>Sobre mim</AboutButton>
          <ProjectsButton to={Links.PROJECTS}>Projetos</ProjectsButton>
        </span>
      </TopNavigation>
      <MainText>
        Meu nome é Mateus Elias, seja bem vindo ao meu website pessoal.
      </MainText>
      <SecondaryText>
        Ainda estamos em fase de construção, em breve o website estará recheado
        👌
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
