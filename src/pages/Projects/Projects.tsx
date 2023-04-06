import { useState } from 'react';
import FrogNinja from '../../assets/frog-ninja.png';
import TwentyFortyEight from '../../assets/2048.png';
import Palavrinha from '../../assets/palavrinha.png';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Card, { CardProps } from '../../components/Card/Card';
import FrogNinjaModal from '../../components/FrogNinjaModal/FrogNinjaModal';

function Projects() {
  const [isFrogNinjaModalOpen, setIsFrogNinjaModalOpen] = useState(false);

  const cards: Array<CardProps> = [
    {
      title: 'Frog Ninja 🐸',
      image: FrogNinja,
      description: 'Jogo de plataforma 2D desenvolvido utilizando o Unity',
      button: true,
      buttonContent: 'Jogar',
      buttonOnClick: () => {
        setIsFrogNinjaModalOpen(true);
      },
    },
    {
      title: '2048 🔢',
      image: TwentyFortyEight,
      description: 'Jogo 2048 desenvolvido utilizando React com JavaScript',
      repoUrl: 'https://github.com/mateuseap/2048',
      button: true,
      buttonContent: 'Jogar',
      buttonRedirectUrl: '/2048',
    },
    {
      title: 'Palavrinha 📚',
      image: Palavrinha,
      description:
        'Jogo de advivinhar a palavra desenvolvido utilizando React com JavaScript',
      repoUrl: 'https://github.com/mateuseap/palavrinha',
      button: true,
      buttonContent: 'Jogar',
      buttonRedirectUrl: '/palavrinha',
    },
  ];
  const [index, setIndex] = useState<number>(0);

  function indexIncrement() {
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  }

  function indexDecrement() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <DefaultPage childrenClassName='flex flex-col flex-1 pr-6'>
      <div className='h-full w-full flex flex-row justify-center items-center'>
        <button className='text-[3rem] pr-12' onClick={indexDecrement}>
          {'<'}
        </button>
        <div className='flex flex-row gap-x-3'>
          <Card
            key={cards[index].title}
            title={cards[index].title}
            image={cards[index].image}
            description={cards[index].description}
            repoUrl={cards[index].repoUrl}
            button={cards[index].button}
            buttonContent={cards[index].buttonContent}
            buttonRedirectUrl={cards[index].buttonRedirectUrl}
            buttonOnClick={cards[index].buttonOnClick}
          />
          {isFrogNinjaModalOpen && <FrogNinjaModal />}
        </div>
        <button className='text-[3rem] pl-12' onClick={indexIncrement}>
          {'>'}
        </button>
      </div>
    </DefaultPage>
  );
}

export default Projects;
