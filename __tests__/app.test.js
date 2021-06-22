import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get from /', async() => {
    const res = await request(app)
    .get('/');
    expect(res.text).toEqual('let the music play');
  });

  it('get saved image id', async() => {
    const res = await request(app)
    .post('/saved');
    expect (res.body).toEqual(booger);
  });
});
