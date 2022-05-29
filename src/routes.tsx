import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Links } from './types/enums';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.HOME} element={<Home />} />
        <Route path={Links.ABOUT} element={<About />} />
        <Route path={Links.PROJECTS} element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
