// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../features/site/pages/LandingPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 