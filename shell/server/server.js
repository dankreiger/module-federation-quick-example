import express from 'express';
import path from 'path';
import { render } from './middleware/render';

const PORT = 3000;
const app = express();
const router = express.Router();

router.use('^/$', render);

router.use(
  express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);

app.use(router);

const log = () => console.log(`SSR running on port http://localhost:${PORT}`);
app.listen(PORT, log);
