import express from 'express';
import env from 'dotenv';
const app = express()
import  routes  from './routes/api.js';
// respond with "hello world" when a GET request is made to the homepage
env.config()
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

/** MIDDLEWARE */
// PARSE DATA FROM THE CLIENT TO THE SERVER
app.use(express.json())

/** ROUTES */
app.use('/', routes);

/** SERVER */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
