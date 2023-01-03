import { I18nextProvider } from 'react-i18next';
import App from './App';
import common_ptBR from './translations/ptBR/common.json';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ptBR',
  resources: {
    ptBR: {
      common: common_ptBR,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
