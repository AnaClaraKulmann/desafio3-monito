import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import './styles/main.css';
import './styles/fonts.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
