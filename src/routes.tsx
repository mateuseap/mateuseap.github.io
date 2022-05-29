import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Links } from './types/enums';
import Home from './pages/Home/index';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
