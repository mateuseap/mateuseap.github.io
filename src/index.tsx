import './index.css';
import './i18n';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './theme/ThemeProvider';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find the root element');
}
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
