// h1 Setup
// h2 Imports
import express from 'express';

// h2 Declarations
const router = express.Router();

// h1 Routes
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// h1 Exports
export default router;