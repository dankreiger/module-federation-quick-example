import fs from 'fs';
import path from 'path';
import { html, scriptTags } from '../helpers/html';

export const render = (_, res) => {
  fs.readFile(
    path.resolve(__dirname, '../..', 'public/index.html'),
    'utf8',
    (err, data) => {
      if (err) throw err;

      const document = data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>${scriptTags}`
      );

      res.send(document);
    }
  );
};
