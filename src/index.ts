/************************************************************************************************/
// __filename and __dirname polyfill start
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __filename and __dirname polyfill end
/************************************************************************************************/
import express, {Express} from 'express';
/************************************************************************************************/
// define path to public dir and dat dir
const pathToPublicDir = path.join(__dirname, '../public');
/************************************************************************************************/
const app: Express = express();
app.use(express.static(pathToPublicDir));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
/************************************************************************************************/
const port: number = 3000;
app.listen(port, () => {
  console.log(`server is running on [localhost:${port}]`);
});
/************************************************************************************************/
import mykuuu from './router/mykuuu.js'
console.log(`mykuuu.myku: ${mykuuu.myku}`);
