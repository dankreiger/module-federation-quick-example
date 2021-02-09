import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';

import Shell from '../../client/Shell';

// This is the stats file generated by webpack loadable plugin
const statsFile = path.resolve(__dirname, '../..', 'dist/loadable-stats.json');

// Create an extractor from the statsFile
const extractor = new ChunkExtractor({ statsFile });

// Wrap application using "collectChunks" and render app
const renderApp = async () => {
  const element = React.createElement(Shell);
  await ssrPrepass(extractor.collectChunks(element));

  return renderToString(element);
};

// Render application
const html = renderApp();

// script tags
const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
// "preload/prefetch" links
const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
// style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

export { html, scriptTags, linkTags, styleTags };
