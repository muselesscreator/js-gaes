/* eslint-disable import/prefer-default-export */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import { StrictDict, useStrictDict } from './StrictDict';

import ExampleApp from './ExampleApp';

ReactDOM.render(
  <ExampleApp />,
  document.getElementById('root'),
);

export { StrictDict, useStrictDict };
export { default as GaesContext } from './GaesContext';
export { keyStore, useKeyStore } from './keyStore';