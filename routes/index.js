// h1 Setup
// h2 Imports
import express from 'express';

// h2 Declarations
const router = express.Router();

// h1 Routes
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Got My Back' });
});

router.post('/list', function (req, res, next) {
  const postcode = req.body.postcode;
  const topic = req.body.topic;

  console.log(`Postcode: ${postcode}`);
  console.log(`Topic: ${topic}`);

  res.render('list', { title: 'Got My Back' });
});

router.get('/list', function (req, res, next) {
  res.render('list', { title: 'Got My Back' });
});

router.get('/entry', function (req, res, next) {
  res.render('entry', { title: 'Got My Back' });
});

// h1 Exports
export default router;
