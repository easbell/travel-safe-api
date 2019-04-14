import request from 'supertest';
import '@babel/polyfill';
import app from './app';

describe('/api', () => {
  beforeEach(() => {
    app.locals.all = [];
  });

  describe('get /v1/data', () => {
    it('should return a 200 status with the countries array', async () => {
      const response = await request(app).get('/api/v1/data');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(app.locals.all);
    });
  });
});