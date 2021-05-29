import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const path = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(path, '/public')));
app.set('views', join(path, '/views'));
app.set('view engine', 'ejs');


const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});



import fs from 'fs';

let rawData = fs.readFileSync('pictureData.json');
let imageData = JSON.parse(rawData);

app.use('/', (req, res) => {
    res.render('../index', {imageData});
});


