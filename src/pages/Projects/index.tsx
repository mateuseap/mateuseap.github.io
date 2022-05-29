import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  HomeButton,
  AboutButton,
  ProjectsButton,
} from './styles';
import { Links } from '../../types/enums';

function Projects() {
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
    </Background>
  );
}

export default Projects;
