import express from 'express';
import cors from 'cors';
import { vaccines } from './data';
import { cleanData } from './cleanData';
const app = express();
app.use(express.json());
app.use(cors());

app.locals.safety = [];
app.locals.vaccines = vaccines;
app.locals.all = [];

const rp = require('request-promise');
rp('https://www.travel-advisory.info/api', (error, res, body) => {
  if(!error && res.statusCode == 200) {
    app.locals.safety.push(body);
    const combined = cleanData(app.locals.safety, app.locals.vaccines)
    app.locals.all.push(combined)
  } else {
    console.log(error)
  }
});

app.get('/api/v1/data', (req, res) => {
  res.status(200).json(app.locals.all);
});

export default app;