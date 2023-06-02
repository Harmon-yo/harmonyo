import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./pages/css/mainStyle.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Por algum motivo, faz rodar 2x o próprio componente */}
    <App />
  </React.StrictMode> 
);
