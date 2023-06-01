import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/header.jsx';
import Cards from './components/ImageCardBlock/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header/>
     <Cards/>
  </React.StrictMode>
);