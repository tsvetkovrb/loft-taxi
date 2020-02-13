import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from 'utils/theme';
import { store } from 'store/store';

import { AppContainer as App } from 'containers/AppContainer';
import { history } from 'utils/history';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
