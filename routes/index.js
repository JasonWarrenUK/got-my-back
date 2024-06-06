// h1 Setup
// h2 Imports
import express from 'express';
import { search } from '../data/params.js';

// h2 Declarations
const router = express.Router();

// h1 Routes
router.get('/', function (req, res, next) {
  search.postcode = '';
  search.topic = '';
  
  res.render('index', { title: 'Got My Back' });
});

router.post('/list', function (req, res, next) {
  search.postcode = req.body.postcode;
  search.topic = req.body.topic;

  console.log(`${search.postcode}, ${search.topic}`);

  res.render('list', { title: 'Got My Back', postcode: search.postcode, topic: search.topic });
});

router.get('/list', function (req, res, next) {
  res.render('list', { title: 'Got My Back', postcode: search.postcode, topic: search.topic });
});

router.get('/entry', function (req, res, next) {
  res.render('entry', { title: 'Got My Back', postcode: search.postcode, topic: search.topic });
});

// h1 Exports
export default router;
