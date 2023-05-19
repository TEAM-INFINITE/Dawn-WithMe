import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import GlobalStyled from './styles/Globalstyled';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyled />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
