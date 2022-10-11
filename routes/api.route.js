const router = require('express').Router();

const subscription = require('../controller');
router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


router.get('/subscription', subscription.list);
router.post('/subscription', subscription.create);
router.patch('/subscription/:id', subscription.update);
router.get('/subscription/:id', subscription.get);

module.exports = router;
