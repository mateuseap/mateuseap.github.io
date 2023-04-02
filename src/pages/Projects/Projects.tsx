import { useState } from 'react';
import { Button, Typography, Modal } from '@mui/material';
import { FrogNinjaModalBox } from './styles';
import frogNinja from '../../assets/frog-ninja.png';
import DefaultPage from '../../components/DefaultPage/DefaultPage';

function Projects() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DefaultPage>
      <div className='flex items-center justify-center h-screen'>
        <div className='z-10 mb-[355px]'>Frog Ninja 🐸</div>
        <img
          src={frogNinja}
          alt='Frog Ninja 🐸'
          style={{
            position: 'absolute',
            height: '335px',
          }}
          draggable='false'
        />
        <Button
          variant='contained'
          onClick={handleOpen}
          style={{ position: 'absolute', top: '525px', color: 'white' }}
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
              style={{ width: '50vw', height: '62vh' }}
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
    </DefaultPage>
  );
}

export default Projects;
