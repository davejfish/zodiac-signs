const { Router } = require('express');
const router = Router();

router.get('/:sign', async (req, res) => {
  const sign = req.params.sign;
  const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}/`);
  const data = await response.json();
  res.json(data);
});

module.exports = router;
