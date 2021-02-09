import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import Shell from './Shell';

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<Shell />, root);
});
