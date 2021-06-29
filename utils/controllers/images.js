import { Router } from 'express';
import { read } from 'fs/promises';
import ImageService from '../ImageServices.js';

export default Router() // app.post(....)
  .post('/', async (req, res, next) => {
    try {
      const image = await ImageService.create(req.body);
      res.send(image);

    } catch (err) {
      next(err);
    }
  });
