import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import DarkMode from "./darkMode/darkMode";
import i18n from "./i18n/i18n"
import Modal from "./components/Modal/Modal";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
         <DarkMode>

                 <App />
         </DarkMode>
      </BrowserRouter>

  </React.StrictMode>
);


