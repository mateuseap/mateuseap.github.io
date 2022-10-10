import { useState } from 'react';
import { Button, Typography, Modal } from '@mui/material';
import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  HomeButton,
  AboutButton,
  ProjectsButton,
  FrogNinja,
  FrogNinjaModalBox,
} from './styles';
import { Links } from '../../types/enums';
import frogNinja from '../../assets/frog-ninja.png';

function Projects() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Background>
      <TopNavigation>
        <HeaderTitle>😀 mateuseap </HeaderTitle>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <HomeButton to={Links.HOME}>Home</HomeButton>
          <AboutButton to={Links.ABOUT}>Sobre mim</AboutButton>
          <ProjectsButton to={Links.PROJECTS}>Projetos</ProjectsButton>
        </div>
      </TopNavigation>
      <FrogNinja>
        Frog Ninja 🐸
        <img
          src={frogNinja}
          alt='Forg Ninja 🐸'
          style={{
            position: 'absolute',
            top: '40px',
            right: '-160px',
          }}
        />
        <div>
          <Button
            variant='contained'
            onClick={handleOpen}
            style={{ top: '342.5px', right: '-45px', color: 'white' }}
          >
            Jogar
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <FrogNinjaModalBox>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                style={{
                  color: 'white',
                }}
              >
                Frog Ninja 🐸
              </Typography>
              <iframe
                title='Frog Ninja 🐸'
                src='https://i.simmer.io/@Meap018/frog-ninja'
                style={{ width: '50vw', height: '62vh', border: '1' }}
              />
              <Typography
                id='modal-modal-description'
                sx={{ mt: 1 }}
                style={{
                  color: 'white',
                }}
              >
                Colete todos os morangos e mate todos os inimigos, após isso vá
                até o checkpoint para passar de fase 👾
                <br />
                <br />
                Movimentos (Esquerda/Direita): Setas ou A/D
                <br />
                Pulo: Barra de Espaço
              </Typography>
            </FrogNinjaModalBox>
          </Modal>
        </div>
      </FrogNinja>
    </Background>
  );
}

export default Projects;
