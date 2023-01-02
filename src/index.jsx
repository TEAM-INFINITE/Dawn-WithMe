import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import GlobalStyled from './styles/Globalstyled';
import theme from './styles/theme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <GlobalStyled />
      <App />
    </RecoilRoot>
  </ThemeProvider>,
  // </React.StrictMode>,
);
