import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement){
  throw new Error('Falha ao encontrar o elemento raíz');
}
const root = createRoot(rootElement);

root.render(<App />);