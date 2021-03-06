/* eslint-disable import/default */

import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Main, store } from './modules/core';
import './styles/base.css';

require('./favicon.ico');

render(
  <AppContainer>
    <Main store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./modules/core/components/Main/Main', () => {
    const NewMain = require('./modules/core/components/Main/Main').default;
    render(
      <AppContainer>
        <NewMain store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
