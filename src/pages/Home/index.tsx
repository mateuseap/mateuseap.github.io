import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  MainText,
  SecondaryText,
} from './styles';
import fox from '../../assets/fox.png';

function Home() {
  return (
    <Background>
      <TopNavigation>
        <Rectangle1>😀</Rectangle1>
        <HeaderTitle> mateuseap </HeaderTitle>
      </TopNavigation>
      <MainText>
        Meu nome é Mateus Elias, seja bem vindo ao meu website pessoal.
      </MainText>
      <SecondaryText>
        Ainda estamos em fase construção, em breve o website estará recheado 😎
      </SecondaryText>
      <img
        src={fox}
        alt='fox'
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
