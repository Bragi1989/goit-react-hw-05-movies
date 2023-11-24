import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
  </BrowserRouter>
);