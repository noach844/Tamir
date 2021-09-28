const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded());

router.use(bodyParser.json());
router.use(cors());

router.get('/', (req, res) => {
  res.send({ response: 'I am alive' }).status(200);
});

router.post('/balance', (req, res) => {
  let value =
    Math.floor(Math.random() * 7) / 10 + Math.floor(Math.random() * 10) * 10000;
  console.log(req.body);
  switch (req.body.bankName) {
    case 'bank1':
      res.json({ response: value });
      break;
    case 'bank2':
      res.json({ response: value });
      break;
    default:
      res.json({ response: 'faild to find bank' }).status(404);
  }
});

module.exports = router;
