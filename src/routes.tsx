import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Links } from './types/enums';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

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
