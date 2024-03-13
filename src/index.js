import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import DarkMode from "./darkMode/darkMode";

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


