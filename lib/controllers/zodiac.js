const { Router } = require('express');

const router = Router();
const { signs } = require('../../data/zodiac');

router
  .get('/:id', (req, res) => {
    const sign = signs.find((sign) => sign.id === req.params.id);
    res.json(sign);
  })
  .get('/', (req, res) => {
    const newSigns = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(newSigns);
  });

module.exports = router;
