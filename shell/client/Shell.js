import React from 'react';
import loadable from '@loadable/component';

// const App = React.lazy(() => import("app/AppIndex"));
const App = loadable(() => import('app/AppIndex'));
// const App = React.lazy(() => import('app/AppIndex'));
const Shell = () => (
  <div>
    <h1>Server-Side Rendering</h1>
    <h2>Shell</h2>
    <App />
  </div>
);

export default Shell;
