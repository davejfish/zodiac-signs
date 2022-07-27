const { Router } = require('express');

const router = Router();
const { signs } = require('../../data/zodiac');

router
  .get('/sign/:dob', (req, res) => {
    for (const sign of signs) {
      const [start, end] = sign.dates.split('-');
      const [checkMonth, checkDay] = req.params.dob.split('-');
      
      const startDate = new Date(start);
      const endDate = new Date(end);
      const checkDate = new Date(2001, checkMonth - 1, checkDay);

      if ((checkDate >= startDate && checkDate <= endDate) 
      || (startDate >= endDate && (checkDate >= startDate || checkDate <= endDate))) {
        return res.json(sign.name);
      }
    }
    return null;
  })
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
