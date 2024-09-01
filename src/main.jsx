import { createRoot } from 'react-dom/client';
import './index.css';
import Apps from './Apps';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Apps />} />
      </Routes>
  </BrowserRouter>
);
