import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './context/appContext';
import { GlobalStyle } from './App.styles';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyle />
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
