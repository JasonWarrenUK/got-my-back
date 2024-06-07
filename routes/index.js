import express from 'express';
import results from './results.js';
import users from './users.js';

const router = express.Router();

router.use('/', results);
router.use('/users', users);

export default router;