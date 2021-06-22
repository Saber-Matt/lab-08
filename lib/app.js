import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import imageController from './utils/controllers/images.js'

const app = express();

app.use(express.json());

if (app) {
  console.log('hi');
}

app.use('/api/v1/orders', imageController)
app.use(notFoundMiddleware);
app.use(errorMiddleware);



export default app;
