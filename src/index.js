import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import translate_es from "./locales/es/translation.json"
import translate_en from "./locales/en/translation.json"
import translate_de from "./locales/de/translation.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue : false},
  lng: "en",
  resources :{
    en:{
      translate : translate_en,
    },
    es:{
      translate : translate_es,
    },
    de:{
      translate : translate_de,
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

