// const pool = require('../lib/utils/pool');
// const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../data/zodiac');

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

it('/zodiac/horoscopes/sign returns the horoscope for the matching sign parameter', async () => {
  const leo = await request(app).get('/zodiac/horoscopes/leo');
  const expected = {
    sign: 'leo',
    date: '2022-07-26',
    horoscope:
      'A cosmic alliance between the Cancer moon and Venus can help you reconnect with your inner strength this morning, dear Lion, but only if you\'re willing to show yourself plenty of love and compassion. Take a moment to fully appreciate your current situation and resilience up until this point, as you may need to rely on these sentiments in order to push through the day. Tensions will brew between Mercury and Mars, threatening to throw you off course with challenges and barriers to your path. Luckily, you\'ll have an opportunity to regain control later this evening when Luna blows a kiss to passionate Mars.',
  };

  expect(leo.body).toEqual(expected);
});
