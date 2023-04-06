import { Modal } from '@mui/material';
import { useState } from 'react';
import { Tooltip } from 'flowbite-react';
import { XCircleIcon } from '@heroicons/react/24/outline';

function FrogNinjaModal() {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-[50%] flex pr-4 pl-2 pt-2 font-bold text-xl text-black bg-[#dedede]'>
          <div className='flex flex-1 pl-16 pb-2 justify-center items-center'>
            Frog Ninja 🐸
          </div>
          {/* eslint-disable-next-line react/style-prop-object */}
          <Tooltip style='light' content={'Fechar'} placement='right'>
            <button onClick={() => setOpen(false)}>
              <XCircleIcon className='h-10 w-10 float-right hover:bg-white hover:rounded-xl hover:shadow-md stroke-[0.8px]' />
            </button>
          </Tooltip>
        </div>
        <iframe
          title='Frog Ninja 🐸'
          src='https://i.simmer.io/@Meap018/frog-ninja'
          style={{ width: '50vw', height: '70vh' }}
        />
        <div className='w-[50vw] p-2 text-black text-center bg-[#dedede]'>
          Colete todos os morangos e mate todos os inimigos, após isso vá até o
          checkpoint para passar de fase 👾
          <br />
          <br />
          <strong>Movimentos (Esquerda/Direita)</strong>: Setas ou A/D
          <br />
          <strong>Pulo</strong>: Barra de Espaço
        </div>
      </div>
    </Modal>
  );
}

export default FrogNinjaModal;
