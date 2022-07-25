const { Router } = require('express');

const router = Router();
const { signs } = require('../../data/zodiac');

router
  .get('/:id', (req, res) => {
    const sign = signs.find((sign) => sign.id === req.params.id);
    res.json(sign);
  })
  .get('/', (req, res) => {
    res.json(signs);
  });

module.exports = router;
