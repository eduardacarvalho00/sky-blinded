import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "normalize.css";
import Header from './components/Header';
import Buscador from './components/Buscador';
import Tabela from './components/Tabela';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Buscador />
    <Tabela />
  </React.StrictMode>
);

