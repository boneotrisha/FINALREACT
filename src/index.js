import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import'./css/about.css';
import'./css/menu.css';
import './css/icons.css';
import './css/contact.css';
import About from './pages/About';
import Menu from './pages/Menu';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='App'>
  <Routes>

      <Route path='/' element={<Main/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>

  </Routes>
  </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
