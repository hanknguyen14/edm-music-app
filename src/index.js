import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { ThemeProvider } from 'styled-components';
import themeConfiguration from 'components/Theme/Config';
import GlobalStyle from './StyledIndex.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        ...themeConfiguration,
      }}
    >
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
