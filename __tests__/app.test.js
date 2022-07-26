const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../data/zodiac');

describe('zodiac sign routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});

it('/zodiac returns id and name for each sign', async () => {
  const res = await request(app).get('/zodiac');
  const expected = signs.map((sign) => {
    return { id: sign.id, name: sign.name };
  });

  expect(res.body).toEqual(expected);
});

it('/zodiac/id returns detail about specific sign', async () => {
  const res = await request(app).get('/zodiac/7');
  const expected = {
    id: '7',
    name: 'libra',
    dates: 'Sept 23 - Oct 22',
    symbol: 'Balance',
  };

  expect(res.body).toEqual(expected);
});
