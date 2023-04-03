import { MainText, SecondaryText } from './styles';
import fox from '../../assets/fox.png';
import DefaultPage from '../../components/DefaultPage/DefaultPage';

function Home() {
  return (
    <DefaultPage>
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
    </DefaultPage>
  );
}

export default Home;
